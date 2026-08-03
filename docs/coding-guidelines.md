# Favoria - Engineering Standards

Last Updated: 2026-08-03

This document defines the engineering standards for Favoria. It guides code quality, architecture decisions, and AI collaboration.

## 1. Philosophy

- Clean Code
- Simplicity
- Readability
- Maintainability
- Scalability
- Security First

---

## 2. General Principles

- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- SOLID (apply relevant principles)
- Composition over Inheritance
- Explicit over Implicit

---

## 3. TypeScript Standards

- `tsconfig` should enforce `strict` mode.
- Avoid `any`. Use `unknown` then narrow when necessary.
- Prefer `type` for unions and `interface` for object shapes when extension is expected.
- Use `enum` sparingly; prefer union string literal types for public APIs.
- Leverage utility types (`Partial`, `Pick`, `Omit`) carefully.

---

## 4. React Standards

- Prefer functional components.
- Prefer Server Components by default; mark components as client only when interactive behavior or browser-only APIs required.
- Encapsulate data fetching in hooks under `packages/hooks`.
- Memoize components/values only when there's a measurable perf reason.

---

## 5. Next.js Standards

- Use App Router and route groups for layout composition.
- Keep `app/` routes thin; delegate logic to `lib/` or `packages/*` services.
- Use `loading.tsx` and `error.tsx` for UI-level feedback.
- Keep metadata in `metadata.ts` where needed.

---

## 6. Supabase Standards

- RLS must be enabled for user data.
- Use `auth.uid()` within RLS policies for authorization.
- Never expose `SUPABASE_SERVICE_KEY` to client-side code.

---

## 7. Folder Structure

- `components/` — presentational components
- `features/` — feature entrypoints and orchestration
- `lib/` — integration and service clients
- `hooks/` — shared React hooks
- `services/` — business logic and domain services
- `types/` — shared TypeScript types
- `utils/` — small utility functions

---

## 8. Naming Convention

- Files & Folders: `kebab-case` (e.g., `product-card.tsx`)
- React Components: `PascalCase` (e.g., `ProductCard`)
- Variables/Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Types/Interfaces: `PascalCase` (e.g., `Product`, `UserProfile`)

When to use:

- `kebab-case` for filesystem paths
- `PascalCase` for exported React components and types
- `camelCase` for local variables and functions

---

## 9. Error Handling

- Use `try/catch` for async operations and bubble actionable messages to UI.
- Log detailed errors server-side; show user-friendly messages on client.
- Use Error Boundaries for React components that may throw.

---

## 10. Performance

- Lazy load large components (`dynamic()` in Next.js)
- Use `next/image` for images
- Cache API responses where appropriate (stale-while-revalidate)
- Use pagination and limit large list payloads

---

## 11. Security

- Validate all inputs server-side.
- Sanitize HTML and user-generated content to prevent XSS.
- Protect against CSRF by using same-site cookies and token checks for forms.
- Manage secrets via environment variables and the platform secret manager.

---

## 12. Accessibility

- Use semantic HTML elements.
- Ensure keyboard accessibility for interactive controls.
- Provide visible focus styles and use ARIA attributes where needed.

---

## 13. Documentation

- Use JSDoc/TSDoc for public package APIs where helpful.
- Keep `README.md` for package-level instructions.
- Update relevant `docs/` files whenever behavior or API changes.

---

## 14. AI Collaboration Rules

When AI generates code:

- Read `docs/` before implementing.
- Follow PRD, Architecture, Database, Design System, and API Contract.
- Do not change files outside task scope.
- If documentation conflicts or missing information found, create a TODO and ask for clarification.
- Add tests for AI-generated behavior where feasible.

---

## 15. Definition of Done

An implementation is complete when:

- Build passes.
- No TypeScript errors.
- No ESLint errors.
- Follows Design System.
- Follows API Contract.
- Follows Database Schema.
- Documentation updated for changes.
- Acceptance criteria met.
