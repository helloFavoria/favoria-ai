# Authentication Implementation Task

Title: Implement authentication flow for MVP

Status: Done

Description:
Implemented the authentication module for Favoria following the approved specification, API contract, UI blueprint, and user flow. The milestone covers login, register, logout, protected routes, forgot password, session handling, typed validation, and a Playwright E2E flow.

Acceptance Criteria:

- Users can register with email and password.
- Users can log in with valid credentials.
- Users can log out and end their session.
- Protected routes redirect unauthenticated users to login.
- Auth-related errors are displayed clearly to the user.
- The implementation aligns with the authentication specification and API contract.

Implementation Summary:

- Added protected route middleware for /dashboard, /products, /collections, and /settings.
- Added an auth provider and auth hook for shared session state.
- Moved auth handling to server actions for login and register.
- Added forgot password and reset password pages.
- Added typed auth, validation, and network error modules.
- Added Playwright E2E coverage for the authenticate flow.

Verification:

- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build

Related Specs / Links:

- docs/specifications/authentication.md
- docs/ui/authentication.md
- docs/api-contracts/auth.md
- docs/user-flows/guest-to-dashboard.md
