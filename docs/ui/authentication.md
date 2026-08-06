# Authentication UI Blueprint

## Screen

Login, Register, and Forgot Password

## Layout

- Top bar with Favoria branding and a lightweight subtitle
- Centered card container with form title and supporting text
- Form fields for email, password, and optional display name
- Primary action button
- Secondary link for switching between login and register
- Inline helper text for password rules and recovery

## Props

- Form mode: login | register | forgot-password
- IsSubmitting: boolean
- ValidationErrors: map of field errors
- SuccessMessage: optional message surfaced after submit
- AuthModeSwitch: callback for switching flow

## Behavior

- Validation runs on submit and on blur for required fields
- Password visibility toggle is supported for login/register
- Successful login or register routes to dashboard
- Forgot password sends recovery request and shows confirmation state
- Error states are surfaced inline near the relevant field

## Permissions

- Guest only
- Authenticated users are redirected away from this flow

## Loading State

- Button shows loading state and disables duplicate submit
- Form fields become read-only during submit

## Empty State

- Not applicable; these screens always require a form entry

## Error State

- Display inline error message for invalid credentials or duplicate email
- Show a non-blocking alert for network failures
