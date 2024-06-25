import { test, expect } from '@playwright/test';

test('Cart Test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'shop', exact: true }).click();
  await page.locator('.ShopProduct_container__AnYTz > button').first().click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByText('Whey Protein 700g$27.991$')).toBeVisible();
});