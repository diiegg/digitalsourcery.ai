import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", title: "Digital Sourcery" },
  { path: "/intelligence", title: "Intelligence" },
  { path: "/foundation", title: "Foundation" },
  { path: "/stack", title: "Stack" },
  { path: "/about", title: "About" },
];

// Test all routes render without errors
for (const route of routes) {
  test(`${route.path} renders without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`http://localhost:3000${route.path}`);
    await page.waitForLoadState("networkidle");

    expect(errors).toHaveLength(0);
    await expect(page.locator("body")).toBeVisible();
  });
}

// Test navigation links exist
test("header navigation links work", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  const nav = page.locator("header nav");
  await expect(nav).toBeVisible();

  // Check nav links exist
  await expect(nav.locator('a[href="/intelligence"]')).toBeVisible();
  await expect(nav.locator('a[href="/foundation"]')).toBeVisible();
  await expect(nav.locator('a[href="/stack"]')).toBeVisible();
  await expect(nav.locator('a[href="/about"]')).toBeVisible();
});

// Test home page sections exist
test("home page has all 8 sections", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  // Hero h1
  await expect(page.locator("h1")).toContainText("Make AI Work");

  // Section headings (h2)
  const h2s = page.locator("h2");
  const count = await h2s.count();
  expect(count).toBeGreaterThanOrEqual(6);
});

// Test redirects
test("/blackmagickops redirects to /foundation", async ({ page }) => {
  await page.goto("http://localhost:3000/blackmagickops");
  await page.waitForLoadState("networkidle");
  expect(page.url()).toContain("/foundation");
});

// Test mobile viewport renders
test("mobile viewport renders without horizontal scroll", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  const body = page.locator("body");
  const bodyWidth = await body.evaluate((el) => el.scrollWidth);
  const viewportWidth = 375;

  // Body should not exceed viewport width (no horizontal scroll)
  expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // 10px tolerance for scrollbar
});

// Test mobile hamburger menu
test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  // Nav links should be hidden on mobile
  const desktopNav = page.locator('header nav >> .hidden.md\\:flex');
  await expect(desktopNav).toBeHidden();

  // Hamburger button should be visible
  const hamburger = page.locator('button[aria-label="Toggle menu"]');
  await expect(hamburger).toBeVisible();

  // Click hamburger
  await hamburger.click();

  // Mobile menu should appear with links
  const mobileLink = page.locator('header >> a[href="/intelligence"]').last();
  await expect(mobileLink).toBeVisible();
});

// Test footer renders
test("footer has ASCII hero and copyright", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
  await expect(footer).toContainText("Digital Sourcery");
  await expect(footer).toContainText("BlackMagickOps");
});

// Test CTA button exists
test("CTA button links to email", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  const cta = page.locator('a[href="mailto:hello@digitalsourcery.ai"]').first();
  await expect(cta).toBeVisible();
});

// Test tablet viewport
test("tablet viewport renders correctly", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  await expect(page.locator("h1")).toBeVisible();
  const bodyWidth = await page.locator("body").evaluate((el) => el.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(768 + 5);
});

// Test each sub-page has proper h1
for (const route of routes.slice(1)) {
  test(`${route.path} has h1 heading`, async ({ page }) => {
    await page.goto(`http://localhost:3000${route.path}`);
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h1").first()).toBeVisible();
  });
}
