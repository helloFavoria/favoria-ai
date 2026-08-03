# Favoria - API Contract

Last Updated: 2026-08-03

This document defines the official API contract for Favoria. It is a reference for frontend, backend, AI agents, and third parties. All endpoints use JSON and follow the conventions below.

---

## 1. API Overview

- Style: RESTful JSON APIs
- Authentication: Supabase Auth (JWT) - bearer tokens or cookie-based sessions
- Versioning: `/api/v1/...` (v1)
- Response format: standardized JSON envelopes (see Standard Response)

Error format (example):

```json
{
  "status": "error",
  "code": "validation_error",
  "message": "Validation failed",
  "errors": {
    "title": "Title is required"
  }
}
```

---

## 2. Authentication

All auth endpoints live under `/api/v1/auth`.

- POST `/api/v1/auth/register`
  - Request: `{ email, password, full_name? }`
  - Response: `{ user, session }` or 202 if email confirmation required
  - Errors: `validation_error`, `user_exists`

- POST `/api/v1/auth/login`
  - Request: `{ email, password }`
  - Response: `{ user, session }`
  - Errors: `invalid_credentials`

- POST `/api/v1/auth/logout`
  - Request: none (session cookie or Authorization header)
  - Response: `{ status: "ok" }`

- GET `/api/v1/auth/me`
  - Request: Authorization required
  - Response: `{ user }`

- Refresh Token Flow: Use Supabase refresh semantics or rotate session via server endpoint.

---

## 3. Products

Base path: `/api/v1/products`

- GET `/api/v1/products`
  - Query: `?limit=&offset=&q=&marketplace_id=&tags=&sort=`
  - Response: `{ data: [Product], pagination: { limit, offset, total } }`
  - Permissions: public for marketplace items; private fields filtered by ownership

- GET `/api/v1/products/{id}`
  - Response: `{ data: Product }`
  - Permissions: public for marketplace products; owner may see private fields

- POST `/api/v1/products`
  - Request: `{ title, description?, price?, currency?, marketplace_id?, image_url?, tags?: string[], metadata?: object }`
  - Response: `{ data: Product }`
  - Permissions: authenticated

- PATCH `/api/v1/products/{id}`
  - Request: partial product fields
  - Response: `{ data: Product }`
  - Permissions: owner or admin

- DELETE `/api/v1/products/{id}`
  - Response: `{ status: "ok" }`
  - Permissions: owner or admin

Validation rules:

- `title` required, min/max length
- `price` numeric, >= 0
- `currency` ISO 4217 code

Possible errors:

- `validation_error`, `unauthorized`, `forbidden`, `not_found`, `conflict`

---

## 4. Collections

Base path: `/api/v1/collections`

- GET `/api/v1/collections` — list collections (filter by `user_id`, `is_public`)
- GET `/api/v1/collections/{id}` — get collection (includes product list or a separate paginated endpoint)
- POST `/api/v1/collections` — create collection `{ title, description?, is_public? }`
- PATCH `/api/v1/collections/{id}` — update collection
- DELETE `/api/v1/collections/{id}` — delete collection
- POST `/api/v1/collections/{id}/products` — add product to collection `{ product_id, position?, note? }`
- DELETE `/api/v1/collections/{id}/products/{product_id}` — remove product

Permissions: owner or public read when `is_public=true`.

---

## 5. Affiliate Links

Base path: `/api/v1/affiliate-links`

- GET `/api/v1/affiliate-links` — list user's affiliate links
- POST `/api/v1/affiliate-links` — create `{ product_id, url, tag? }`
- PATCH `/api/v1/affiliate-links/{id}` — update link
- DELETE `/api/v1/affiliate-links/{id}` — delete link
- GET `/api/v1/affiliate-links/{id}/clicks` — get click metrics (or aggregated via analytics)

Permissions: each link belongs to a user; owner-only for mutations.

---

## 6. Analytics

Base path: `/api/v1/analytics`

- POST `/api/v1/analytics/events` — ingest event `{ event_type, product_id?, collection_id?, metadata? }` (public ingestion allowed but validated)
- GET `/api/v1/analytics` — query events (admin or owner-scoped)
- GET `/api/v1/analytics/summary` — aggregated metrics for dashboards

Retention and querying patterns should be documented in `docs/database.md`.

---

## 7. Marketplaces

Base path: `/api/v1/marketplaces`

- GET `/api/v1/marketplaces` — list marketplaces
- GET `/api/v1/marketplaces/{id}` — details
- POST/PATCH/DELETE restricted to admin/service roles

---

## 8. Search

Base path: `/api/v1/search`

- GET `/api/v1/search/products?q=&marketplace_id=&tags=&limit=&offset=` — search products
- Response: `{ data: [Product], pagination }`

Search must support full-text ranking, filters, and faceting as needed.

---

## 9. Standard Response

Success response:

```json
{ "status": "ok", "data": { ... } }
```

Error response:

```json
{ "status": "error", "code": "error_code", "message": "Human readable", "errors": { ... } }
```

Validation error example uses `errors` map by field.

Standard HTTP statuses: 200, 201, 202, 204, 400, 401, 403, 404, 409, 422, 500.

---

## 10. Pagination

Support `limit`/`offset` and cursor-based pagination. Responses include `pagination` metadata: `{ limit, offset, total, next_cursor }`.

---

## 11. Filtering

All list endpoints should accept filters: category, marketplace, tags, q (search), sort (field:direction).

---

## 12. Rate Limiting

Apply per-IP and per-user rate limits for public ingestion endpoints (analytics, search). Use conservative defaults and expose headers for quota remaining.

---

## 13. Security

- Authentication: prefer Supabase Auth for user flows (JWT)
- Authorization: server-side checks and RLS enforced at database level
- Input validation and sanitization for all endpoints
- Use HTTPS and secure cookie attributes for session cookies

---

## 14. API Versioning

Start with `v1`. Maintain backward compatibility; deprecate and document breaking changes.

---

## 15. Future API

Placeholders for future modules: Prompt Finder, Workflow Hub, AI Assets API. Define endpoints when those features are scoped.

---

If you want, I can generate a machine-readable OpenAPI spec from this contract as a next step.
