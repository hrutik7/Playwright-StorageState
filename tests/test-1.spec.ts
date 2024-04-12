import { test, expect } from "@playwright/test";
 
test("test-1", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page.locator("#logout2")).toBeVisible({ timeout: 5000 });
});
 
test("test-2", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page.locator("#logout2")).toBeVisible({ timeout: 5000 });
});