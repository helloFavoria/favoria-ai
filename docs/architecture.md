# Favoria - Architecture Reference

Last Updated: 2026-08-03

Dokumen ini menjadi sumber kebenaran (single source of truth) untuk implementasi Favoria. Isi berfokus pada keputusan arsitektural, konvensi, dan pola yang harus diikuti tim dan agen AI saat membangun fitur.

## 1. Project Overview

Favoria adalah platform AI-powered Affiliate Marketplace yang menyatukan katalog produk dari banyak marketplace, pengelolaan affiliate link, koleksi produk, dan analytics dasar — dibangun menggunakan Next.js + Supabase dalam monorepo TypeScript.

Tujuan arsitektur:

- Memastikan konsistensi struktur proyek di seluruh tim dan sesi AI.
- Mempermudah pengembangan fitur berulang (reusable components, clear API contracts).
- Menjamin keamanan data pengguna (RLS, secure secrets).
- Menyediakan pola skalabilitas untuk pertumbuhan produk.

## 2. Tech Stack

- Frontend: Next.js (App Router), React, TypeScript
- Styling: Tailwind CSS (utility-first) + design tokens (theme JSON)
- State: Server Components + client state via React Query (TanStack Query) / Zustand untuk local UI state
- Backend / Auth / Database: Supabase (Postgres + RLS + Storage)
- Hosting / Deployment: Vercel for frontend; Supabase managed for DB + edge functions if needed
- CI/CD: GitHub Actions or Turborepo pipeline (turbo.json present)
- Monorepo tooling: pnpm, turborepo
- Observability: Structured logging to console + optional external (Sentry / Logtail)

## 3. Monorepo Structure

Favoria uses a monorepo layout (apps/, packages/, etc.). High-level conventions:

- `apps/web`: Next.js application (single source of UI)
- `packages/*`: shared packages (ui components, hooks, types, utils)
- `automation/`, `prompts/`: non-runtime assets for automation and AI prompts
- Keep production runtime code inside `apps/` and reusable code inside `packages/`.

## 4. Folder Structure (recommended)

- `apps/web/` — Next.js app
  - `app/` — Next.js App Router routes and layouts
  - `components/` — presentational & container components (import from `packages/ui` when possible)
  - `lib/` — integration code (supabase client wrappers, api clients)
  - `styles/` — global styles and design tokens
- `packages/ui/` — design-system components and tokens
- `packages/hooks/` — shared React hooks (data fetching, auth helpers)
- `packages/types/` — shared TypeScript types and interfaces
- `scripts/` — developer scripts (migrations, generators)

Guidelines:

- Prefer importing from `packages/*` instead of deep `apps/web` paths.
- Keep route handlers small; delegate business logic to `packages/*` or `lib/` modules.

## 5. Application Architecture

Favoria adopts a hybrid Server/Client component strategy:

- Use Server Components for data-heavy pages and canonical rendering (dashboard, product lists) to improve performance.
- Use Client Components for interactive UI (modals, forms, drag/drop, rich text editors).
- Business logic and data access live in `lib/` or `packages/*` (not directly inside route handlers) to enable reuse and testability.

Key patterns:

- Layered responsibilities: Presentation (components) → Orchestration (route/page) → Domain (services in `lib`/`packages`) → Data (database/Supabase).
- Keep UI components pure and dumb; side effects and mutations handled by hooks or service modules.

## 6. Routing Strategy (Next.js App Router)

- Use App Router conventions: `app/(dashboard)/`, `app/(auth)/` route groups for layout composition.
- Server-side rendering via Server Components for initial data fetch using `fetch` or Supabase server client in server contexts.
- Client components handle optimistic updates and interactive flows.
- API handlers: prefer Next.js route handlers (`app/api/.../route.ts`) for server-side endpoints requiring Vercel edge or serverless execution.

Routing decisions:

- Public routes: landing, auth callbacks
- Protected routes: under `app/dashboard` guarded by middleware that validates Supabase session

## 7. Authentication Flow (Supabase Auth)

High-level flow:

- Users register/login via Supabase Auth (email/password + OAuth providers as required).
- Use Supabase cookies or server session verification in middleware to protect routes.
- On server components, verify session using a server-side Supabase client; on client components, use `@supabase/auth-helpers` or a custom hook to access session.

Security rules:

- All authorization checks must be enforced server-side and via Postgres RLS policies.
- Minimize sending sensitive tokens to the client; prefer short-lived session tokens managed by Supabase.

## 8. Database Layer

Design principles:

- Single canonical schema in Supabase/Postgres.
- Tables: `profiles`, `products`, `marketplaces`, `affiliate_links`, `collections`, `collection_items`, `analytics`.
- Use UUID primary keys, normalized relations, and indexes on common query fields (user_id, product_id, marketplace_id, tags).
- Implement Row-Level Security (RLS) so that users can only access their own data by default.

Best practices:

- Keep complex queries inside SQL views or Postgres functions for performance and to centralize logic.
- Use migrations to track schema changes.

## 9. API Layer

API responsibilities:

- Provide server-side endpoints for actions that must not be executed from client directly (webhooks, third-party integrations, complex mutations).
- Keep endpoints small and well-documented (contract: path, method, request body, response, errors).

API rules:

- Prefer direct DB access from Server Components where appropriate; use API routes when side effects, third-party calls, or background jobs are required.
- All API endpoints validate authentication and perform authorization checks.

## 10. State Management

Strategy:

- Remote data: fetched and cached via React Query (TanStack Query) — server as source-of-truth.
- Local UI state: managed with React state or lightweight stores (Zustand) for cross-component transient state.
- Global auth state: minimal; rely on Supabase session and server verification rather than mirroring in client store.

Patterns:

- Use hooks in `packages/hooks` to encapsulate data fetching and mutations (e.g., `useProducts`, `useCollections`).

## 11. UI Component Architecture

Principles:

- Build a `packages/ui` design-system with atomic, reusable components.
- Components should be headless when possible (styling/behavior separated) to allow varied presentation.
- Compose complex components from smaller primitives.

Component responsibilities:

- Presentational components: receive data via props, no side effects.
- Container components: orchestrate data fetching and pass data into presentational components.

## 12. Styling Convention

- Use Tailwind CSS for utility styling; provide design tokens (colors, spacing, type scale) exported from `packages/ui`.
- Maintain a theme file (JSON) with named tokens for colors, typography, and spacing. Do not hardcode hex values across components.
- Use CSS modules or global styles minimally; prefer Tailwind classes with semantic utility classes when needed.

## 13. Naming Convention

- Files & folders: kebab-case (e.g., `product-card.tsx`, `product-list/`).
- React components: PascalCase (e.g., `ProductCard`).
- Types/interfaces: `I` prefix avoided; use descriptive names (e.g., `Product`, `UserProfile`).
- Hooks: `use` prefix (e.g., `useProducts`).

## 14. Error Handling Strategy

- Surface user-friendly errors in UI; log technical details server-side.
- Centralize error types and codes in `packages/types` and map them to messages in the UI.
- For async operations, provide retry strategies and clear user feedback for failed actions.

## 15. Logging Strategy

- Client: limited structured logs for user flows and non-sensitive errors (console + optional telemetry).
- Server: structured logs with correlation IDs; push to external logging (Sentry/Logtail) in production.
- Include user_id and request_id in server logs for traceability (avoid logging secrets).

## 16. Environment Variables

Keep env variables minimal and secure. Examples:

- `NEXT_PUBLIC_SUPABASE_URL` (public)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (public readonly)
- `SUPABASE_SERVICE_KEY` (server-only)
- `SENTRY_DSN`, `VERCEL_REGION`, etc.

Rules:

- Never commit secrets. Use Vercel / Supabase secret management.
- Mark server-only variables without `NEXT_PUBLIC_` prefix.

## 17. Deployment Architecture (Vercel + Supabase)

- Frontend deployed to Vercel (edge network) using Next.js build pipeline.
- Database and auth handled by Supabase managed service; use Supabase Edge Functions for serverless backend logic if needed.
- CI: unit tests, lint, and typecheck run on PRs; deployments require passing checks.

## 18. Security Considerations

- Enforce RLS for all user data.
- Validate and sanitize all inputs at API boundaries.
- Use HTTPS everywhere and secure cookies for sessions.
- Rotate and restrict service keys; keep service keys server-side only.

## 19. Performance Guidelines

- Use Server Components for initial page payload reduction.
- Use incremental static regeneration (ISR) or caching for non-user-specific pages.
- Add DB indexes on frequent query fields; move heavy joins to materialized views if needed.
- Use pagination for lists and lazy-load images via `next/image`.

## 20. Coding Standards

- TypeScript strict mode enabled; prefer explicit types for public APIs.
- ESLint + Prettier enforced in repo.
- Tests: unit tests for packages, integration tests for critical flows.
- PRs: small, focused, with descriptive titles and linked issues.

---

If any architectural decision needs revision, update this file and call out the change in `docs/PRD.md` and the relevant doc that depends on it.
