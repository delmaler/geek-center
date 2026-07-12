# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured in this project.

## What this is

"Geek Center" — a React landing page + mock reservation flow for a fictional board game café. It was originally scaffolded from the spec in `lol.md` (an LLM prompt describing pages, auth, and reservation requirements) — that file is useful as a reference for the intended product scope if extending features, but the actual source of truth is the code under `src/`.

Stack: React 19 + Vite, React Router DOM v7, Tailwind CSS v4 (via `@tailwindcss/vite`), `lucide-react` for icons. No TypeScript, no backend — everything is client-side and mocked.

## Architecture

**Routing** is centralized in `src/App.jsx`: a single `Layout` route (`src/components/Layout.jsx`, which wraps pages with `Navbar` + `Footer` via `Outlet`) nests `Home`, `About`, `Login`, `Register`, and `Reserve` pages from `src/pages/`.

**Auth is fully mocked and client-side.** `src/context/AuthContext.jsx` provides a `useAuth()` hook (`user`, `login`, `register`, `logout`, `loading`) backed by `localStorage` (`geek_user` key) — there is no real backend, password check, or API call. `login`/`register` both just accept whatever object is passed and persist it. `AuthProvider` wraps the whole app in `src/main.jsx` (outside `App`, inside `BrowserRouter`).

**Protected routes** are done ad hoc per-page rather than via a shared route guard: e.g. `src/pages/Reserve.jsx` checks `useAuth()`'s `user` in a `useEffect` and calls `navigate('/login')` if absent, returning `null` on the unauthenticated render. Follow this same pattern if adding new protected pages rather than introducing a wrapper component, unless asked to generalize it.

**Reservation submission is simulated**: `Reserve.jsx` fakes an API call with `setTimeout` and flips local `isSubmitted` state to show a confirmation screen — there is no persistence of reservation data anywhere.

## Styling

Tailwind v4 is configured via `@theme` in `src/index.css` (not a `tailwind.config.js` file — v4 uses CSS-based theming). Custom design tokens live there:
- `--color-primary`, `--color-secondary`, `--color-geek-bg`, `--color-geek-card`, `--color-geek-accent` (used as `bg-primary`, `text-geek-bg`, etc.)
- Semantic CSS variables (`--text`, `--text-h`, `--bg`, `--border`, `--accent`) that swap values under `@media (prefers-color-scheme: dark)` — light/dark mode is automatic via `prefers-color-scheme`, not a manual toggle or class.

When styling new components, reuse these existing tokens (`bg-primary`, `text-text-h`, `border-border`, `bg-accent-bg`, `bg-geek-bg`, `bg-geek-card`) rather than hardcoding colors, to stay consistent with the rest of the app.
