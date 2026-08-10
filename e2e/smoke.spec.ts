import { test, expect } from '@playwright/test';

for (const { path, name } of [
  { path: '/', name: 'Home' },
  { path: '/profile', name: 'Profile' },
  { path: '/career', name: 'Career' },
  { path: '/contact', name: 'Contact' }
]) {
  test(`loads ${name}`, async ({ page }) => {
    await page.goto(`/#${path}`);
    if (path === '/') {
      await expect(page.locator('#home')).toBeVisible({ timeout: 10000 });
    } else {
      await expect(page.locator('.page-label')).toContainText(name, { timeout: 10000 });
    }
  });
}

test('navigates via header links', async ({ page }) => {
  await page.goto('/#/');
  const nav = page.locator('nav');
  for (const [label, path] of [
    ['Profile', '/profile'],
    ['Career', '/career'],
    ['Contact', '/contact']
  ]) {
    await nav.getByRole('link', { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }
});

test('renders 404 for unknown route', async ({ page }) => {
  await page.goto('/#/unknown-page');
  await expect(page.getByText('ページが見つかりません')).toBeVisible();
});
