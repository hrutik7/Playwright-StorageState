import { chromium, Browser, BrowserContext, Page } from "playwright";
 
async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false });
 
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
 
  await page.goto("https://demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("test");
  await page.locator("#loginpassword").fill("test");
  await page.locator('[onclick="logIn()"]').click();
  await expect(page.locator("#logout2")).toBeVisible({ timeout: 5000 });
 
  //Save the state
 
  await page.context().storageState({ path: "state.json" });
 
  await browser.close();
}
 
export default globalSetup;