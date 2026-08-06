# Authentication API Contract

## POST /api/auth/register

### Request

```json
{
  "email": "user@example.com",
  "password": "StrongPass123",
  "fullName": "Jane Doe"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Account created successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "Jane Doe",
    "role": "user"
  }
}
```

### Error Responses

- `400` invalid payload
- `409` email already registered
- `500` unexpected server error

## POST /api/auth/login

### Request

```json
{
  "email": "user@example.com",
  "password": "StrongPass123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Signed in successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user"
  },
  "session": {
    "accessToken": "jwt",
    "expiresAt": "2026-08-07T00:00:00Z"
  }
}
```

### Error Responses

- `401` invalid credentials
- `400` invalid payload

## POST /api/auth/logout

### Request

Headers:

- `Authorization: Bearer <token>`

### Success Response

```json
{
  "success": true,
  "message": "Signed out successfully"
}
```

## POST /api/auth/forgot-password

### Request

```json
{
  "email": "user@example.com"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Reset email sent"
}
```

## POST /api/auth/reset-password

### Request

```json
{
  "token": "reset-token",
  "password": "NewStrongPass123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

## GET /api/auth/session

### Success Response

```json
{
  "success": true,
  "authenticated": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user"
  }
}
```
