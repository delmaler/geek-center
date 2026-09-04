// ─── Password hashing (PBKDF2 via Web Crypto) ────────────────────────────────

const ITERATIONS = 100_000
const SALT_BYTES = 16

function hexEncode(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function hexDecode(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length; i += 2)
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16)
  return bytes
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES))
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']
  )
  const hash = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' }, key, 256
  )
  return `${hexEncode(salt.buffer as ArrayBuffer)}:${hexEncode(hash)}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [saltHex, storedHash] = stored.split(':')
  const salt = hexDecode(saltHex)
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']
  )
  const hash = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' }, key, 256
  )
  return hexEncode(hash) === storedHash
}

// ─── JWT (HS256 via Web Crypto — no external libraries) ──────────────────────

const enc = new TextEncoder()
const dec = new TextDecoder()
const TOKEN_TTL = 7 * 24 * 60 * 60 // 7 days in seconds

function b64urlEncode(buf: ArrayBuffer): string {
  let str = ''
  for (const byte of new Uint8Array(buf)) str += String.fromCharCode(byte)
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function b64urlDecode(str: string): Uint8Array {
  return Uint8Array.from(
    atob(str.replace(/-/g, '+').replace(/_/g, '/')),
    (c) => c.charCodeAt(0)
  )
}

export interface TokenPayload {
  id: string
  email: string
  name: string
  iat: number
  exp: number
}

export async function signToken(
  payload: Omit<TokenPayload, 'iat' | 'exp'>,
  secret: string
): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const header = b64urlEncode(enc.encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).buffer as ArrayBuffer)
  const body = b64urlEncode(enc.encode(JSON.stringify({ ...payload, iat: now, exp: now + TOKEN_TTL })).buffer as ArrayBuffer)
  const data = `${header}.${body}`
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data))
  return `${data}.${b64urlEncode(sig)}`
}

export async function verifyToken(token: string, secret: string): Promise<TokenPayload | null> {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null
    const [header, body, sig] = parts
    const key = await crypto.subtle.importKey(
      'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    )
    const valid = await crypto.subtle.verify(
      'HMAC', key,
      b64urlDecode(sig).buffer as ArrayBuffer,
      enc.encode(`${header}.${body}`)
    )
    if (!valid) return null
    const payload = JSON.parse(dec.decode(b64urlDecode(body))) as TokenPayload
    if (payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch {
    return null
  }
}
