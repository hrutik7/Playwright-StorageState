import { test, expect } from "@playwright/test";
 
test("test-2", async ({ page, context }) => {
  await page.context().clearCookies();
  await page.goto("https://demoblaze.com/");
  await expect(page.locator("#logout2")).toBeVisible({ timeout: 5000 });
});