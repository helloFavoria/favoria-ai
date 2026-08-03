# Testing Strategy

Last Updated: 2026-08-03

This document outlines Favoria's testing strategy and expectations for unit, integration, and end-to-end tests.

## Testing Principles

- Fast feedback for developers
- High signal on business-critical code
- Maintainable tests with clear ownership

## Unit Tests

- Scope: pure functions, utility libraries, UI components behaviour
- Tooling: Jest or Vitest for JS/TS
- Coverage: aim for high coverage on packages and critical modules

## Integration Tests

- Scope: API endpoints, database integration, Supabase interactions (use test db or mocks)
- Tooling: Jest with testcontainers or Supabase test tooling

## E2E Tests

- Scope: critical user journeys (signup, login, create product, create collection, share)
- Tooling: Playwright or Cypress
- Run e2e in CI against a stable staging environment

## Manual QA Checklist

- Smoke test on staging before releases
- Accessibility spot checks
- Cross-browser checks for critical flows

## Acceptance Tests

- Defined per feature in specs; used by product owner to mark done

## Regression Tests

- Keep a suite of regression tests for critical flows; run on release candidates

## Test Data & Environments

- Use isolated test DB instances; seed deterministic data for tests

## CI Integration

- Run lint, typecheck, unit tests on PRs
- Run integration and e2e on main or release branches

---

Add more detailed tooling and commands in `docs/coding-guidelines.md` when ready.
