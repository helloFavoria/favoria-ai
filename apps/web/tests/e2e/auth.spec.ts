import { expect, test } from "@playwright/test";

test("register, login, dashboard, and logout flow", async ({ page }) => {
  const uniqueEmail = `favoria-${Date.now()}@example.com`;
  const password = "StrongPass123";

  await page.goto("/register");
  await page.getByPlaceholder("Email").fill(uniqueEmail);
  await page.getByPlaceholder("Password").fill(password);
  await page.getByPlaceholder("Confirm Password").fill(password);
  await page.getByRole("button", { name: "Register" }).click();

  await page.waitForURL(/\/login/);
  await page.goto("/login");
  await page.getByPlaceholder("Email").fill(uniqueEmail);
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForURL(/\/dashboard/);
  await expect(page.getByText("Dashboard")).toBeVisible();

  await page.getByRole("button", { name: "Logout" }).click();
  await page.waitForURL(/\/login/);
});
