import { test, expect } from '@playwright/test';

test('Checkout Test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'shop', exact: true }).click();
  await page.locator('div:nth-child(5) > button').click();
  await page.locator('div:nth-child(6) > button').click();
  await page.locator('div:nth-child(12) > button').click();
  await page.locator('div').filter({ hasText: /^CellTech Creatine 2700g\$58\.99Add To Cart \(1\)$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '4' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.getByRole('link', { name: '0' }).click();
  await expect(page.getByRole('heading', { name: 'Your Cart Is Empty' })).toBeVisible();
});