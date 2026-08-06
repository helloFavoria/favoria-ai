# API Contracts Index

Last Updated: 2026-08-06

These contracts define the expected request and response payloads for MVP features. They are intended to eliminate ambiguity between frontend and backend implementation.

## Contract Rules

- Every endpoint must declare request body, success response, error response, and auth requirements.
- Payload shapes should be stable and versioned.
- Frontend implementation must align with these contracts exactly.
- Backend changes must update the contract before shipping.

## MVP Endpoint Areas

- Authentication
- Products
- Collections
- Marketplaces
- Affiliate Links
- Search
- Analytics
