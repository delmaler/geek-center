import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { hashPassword, verifyPassword, signToken, verifyToken } from './auth'

interface DbUser {
  id: string
  email: string
  name: string
  password_hash: string
  created_at: number
}

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS — allow all origins (auth is JWT Bearer, not cookie-based)
app.use('/api/*', cors({ origin: '*', allowMethods: ['GET', 'POST', 'OPTIONS'] }))

// ─── POST /api/auth/register ──────────────────────────────────────────────────

app.post('/api/auth/register', async (c) => {
  let email: string | undefined, name: string | undefined, password: string | undefined
  try {
    ;({ email, name, password } = await c.req.json<{ email?: string; name?: string; password?: string }>())
  } catch {
    return c.json({ error: 'Invalid request body — expected JSON' }, 400)
  }

  if (!email || !name || !password)
    return c.json({ error: 'Missing required fields' }, 400)

  if (password.length < 8)
    return c.json({ error: 'Password must be at least 8 characters' }, 400)

  const normalizedEmail = email.toLowerCase().trim()

  const existing = await c.env.DB
    .prepare('SELECT id FROM users WHERE email = ?')
    .bind(normalizedEmail)
    .first()

  if (existing)
    return c.json({ error: 'Email already registered' }, 409)

  const id = crypto.randomUUID()
  const passwordHash = await hashPassword(password)

  await c.env.DB
    .prepare('INSERT INTO users (id, email, name, password_hash, created_at) VALUES (?, ?, ?, ?, ?)')
    .bind(id, normalizedEmail, name.trim(), passwordHash, Date.now())
    .run()

  const token = await signToken({ id, email: normalizedEmail, name: name.trim() }, c.env.JWT_SECRET)
  return c.json({ token, user: { id, email: normalizedEmail, name: name.trim() } }, 201)
})

// ─── POST /api/auth/login ─────────────────────────────────────────────────────

app.post('/api/auth/login', async (c) => {
  let email: string | undefined, password: string | undefined
  try {
    ;({ email, password } = await c.req.json<{ email?: string; password?: string }>())
  } catch {
    return c.json({ error: 'Invalid request body — expected JSON' }, 400)
  }

  if (!email || !password)
    return c.json({ error: 'Missing required fields' }, 400)

  const user = await c.env.DB
    .prepare('SELECT id, email, name, password_hash FROM users WHERE email = ?')
    .bind(email.toLowerCase().trim())
    .first<DbUser>()

  if (!user || !(await verifyPassword(password, user.password_hash)))
    return c.json({ error: 'Invalid email or password' }, 401)

  const token = await signToken({ id: user.id, email: user.email, name: user.name }, c.env.JWT_SECRET)
  return c.json({ token, user: { id: user.id, email: user.email, name: user.name } })
})

// ─── GET /api/auth/me ─────────────────────────────────────────────────────────

app.get('/api/auth/me', async (c) => {
  const auth = c.req.header('Authorization')
  if (!auth?.startsWith('Bearer '))
    return c.json({ error: 'Unauthorized' }, 401)

  const payload = await verifyToken(auth.slice(7), c.env.JWT_SECRET)
  if (!payload)
    return c.json({ error: 'Invalid or expired token' }, 401)

  return c.json({ user: { id: payload.id, email: payload.email, name: payload.name } })
})

export default app
