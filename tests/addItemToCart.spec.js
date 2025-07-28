// @ts-check
import { test, expect } from '@playwright/test';
const HomePage = require('../pages/HomePage')
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const { login, waitForInventory } = require('../commands/commands');
test.describe('New Todo', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    await waitForInventory(page);
  });

  test('has title', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.getItemByName('Backpack').click()
    await expect(homePage.getItemRemoveButton('Backpack')).toBeVisible();
    await sleep(5000);

    // const loginPage = new LoginPage(page);
    // await loginPage.goto();
    // await loginPage.expectLoginPage();
    // await loginPage.login('standard_user', 'secret_sauce');
  });
})