const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const users = require('../test-data/users.json');

test.describe('Nucleus One Login Tests', () => {

  test('Positive Login - Happy Path', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validUser.email,
      users.validUser.password
    );

   
    await expect(page).toHaveURL('https://nucleusone-dev.aiimone.com/dashboard');

  });


  test('Negative Login - Wrong Email', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.invalidUser.wrongEmail,
      users.validUser.password
    );

    await expect(page.locator('div.text-sm.font-semibold')).toHaveText('Login failed');
  });


  test('Negative Login - Wrong Password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validUser.email,
      users.invalidUser.wrongPassword
    );

  await expect(page.locator('div.text-sm.font-semibold')).toHaveText('Login failed');

  });

});