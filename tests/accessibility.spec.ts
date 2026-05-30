import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should pass standard WCAG audits in default states", async ({
    page,
  }) => {
    const defaultScan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(defaultScan.violations).toStrictEqual([]);

    await page.getByRole("button", { name: "Black T-shirt" }).click();
    await page.locator("#dialogSearch").waitFor({ state: "visible" });

    const dialog = await new AxeBuilder({ page })
      .include("#dialogSearch")
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(dialog.violations).toStrictEqual([]);
  });

  // This test runs ONLY on Mobile devices
  test("should pass WCAG audits on mobile navigation menu", async ({
    page,
  }, testInfo) => {
    // Skip this test dynamically if the current browser project is not a mobile device
    test.skip(
      !testInfo.project.use.isMobile,
      "Mobile menu is only visible on small screens",
    );

    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page.locator("#mobile-navigation").waitFor();

    const menuScan = await new AxeBuilder({ page })
      .include("#mobile-navigation")
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(menuScan.violations).toStrictEqual([]);
  });
});
