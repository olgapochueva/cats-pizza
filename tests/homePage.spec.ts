import { test, expect } from '@playwright/test';

//ui test
test('Check header', async ({ page }) => {
  await page.goto('');
  const header = page.getByTestId('homePageHeader');
  await expect(header).toBeVisible();
});

//integration test
test('Check card list items', async ({ page }) => {
  await page.goto('');
  const firstCard = page.getByTestId('catCard_0');
  const cardListItems = page.getByTestId(/catCard/);

  await expect(firstCard).toBeVisible();
  expect(await cardListItems.count()).toBeGreaterThan(0);
});
