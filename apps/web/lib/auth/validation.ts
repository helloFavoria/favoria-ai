export type AuthMode = "login" | "register" | "forgot-password";

export type AuthValidationInput = {
  email: string;
  password: string;
  confirmPassword?: string;
  mode: AuthMode;
};

export type AuthValidationErrors = Partial<
  Record<"email" | "password" | "confirmPassword", string>
>;

export function validateAuthForm(
  input: AuthValidationInput,
): AuthValidationErrors {
  const errors: AuthValidationErrors = {};

  if (!input.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (input.mode !== "forgot-password") {
    if (!input.password.trim()) {
      errors.password = "Password is required.";
    } else if (input.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
  }

  if (input.mode === "register") {
    if (!input.confirmPassword || input.confirmPassword !== input.password) {
      errors.confirmPassword = "Passwords do not match.";
    }
  }

  return errors;
}
