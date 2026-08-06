import { describe, expect, it } from "vitest";

import { validateAuthForm } from "./validation";

describe("validateAuthForm", () => {
  it("accepts a valid login payload", () => {
    const errors = validateAuthForm({
      email: "user@example.com",
      password: "StrongPass123",
      mode: "login",
    });

    expect(errors).toEqual({});
  });

  it("requires a valid email for register", () => {
    const errors = validateAuthForm({
      email: "invalid-email",
      password: "StrongPass123",
      confirmPassword: "StrongPass123",
      mode: "register",
    });

    expect(errors.email).toBe("Please enter a valid email address.");
  });

  it("requires matching passwords for register", () => {
    const errors = validateAuthForm({
      email: "user@example.com",
      password: "StrongPass123",
      confirmPassword: "Different123",
      mode: "register",
    });

    expect(errors.confirmPassword).toBe("Passwords do not match.");
  });
});
