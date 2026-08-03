# Architecture Decision Records (ADR)

Last Updated: 2026-08-03

This document records key architectural decisions and their rationale. It helps engineers and AI agents understand "why" certain choices were made.

## ADR-001: Use Supabase (Postgres) over Firebase

- Rationale: Postgres offers relational modeling, SQL, RLS, and compatibility with Supabase's managed auth and storage. It simplifies queries for relational data (collections, products, affiliates) and provides stronger guarantees for complex joins and indexing.

## ADR-002: App Router (Next.js) for routing

- Rationale: App Router enables Server Components, better layout composition, and incremental adoption of server/client boundaries — which improves performance and developer ergonomics.

## ADR-003: UUID primary keys

- Rationale: UUIDs provide globally unique identifiers across systems and are friendly for distributed imports and merging datasets from multiple marketplaces.

## ADR-004: Enforce RLS for user data

- Rationale: Security by default. RLS ensures data isolation per user and reduces access-control bugs that leak data between accounts.

## ADR-005: Use Monorepo with `packages/*`

- Rationale: Shared components, hooks, and types promote reuse, reduce duplication, and keep the `apps/web` surface small and focused.

## ADR-006: Tailwind CSS + Design Tokens

- Rationale: Tailwind accelerates layout and consistent styling; design tokens centralize theme variables for branding and easy theming.

## ADR-007: Include `collection_products` now (pivot table)

- Rationale: Enables many-to-many relationships between products and collections without later schema breaking migrations.

## ADR-008: Prefer Server Components for data-heavy pages

- Rationale: Reduce client bundle size and improve Time-to-First-Byte by fetching data on the server when possible.

---

Add new ADRs here as decisions evolve. Each ADR should include: ID, decision, rationale, and date.
