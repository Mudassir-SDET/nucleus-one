const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const users = require('../test-data/users.json');

let loginPage;

Given('I open the login page', async function () {
  loginPage = new LoginPage(this.page); // this.page is from Before hook
  await loginPage.goto();               // will now work
});

When('I login with valid credentials', async function () {
  await loginPage.login(users.validUser.email, users.validUser.password);
});

When('I login with wrong email', async function () {
  await loginPage.login(users.invalidUser.wrongEmail, users.validUser.password);
});

When('I login with wrong password', async function () {
  await loginPage.login(users.validUser.email, users.invalidUser.wrongPassword);
});

Then('I should see dashboard', async function () {
  await expect(this.page).toHaveURL('https://nucleusone-dev.aiimone.com/dashboard');
});

Then('I should see login failed message', async function () {
  await expect(this.page.locator('div.text-sm.font-semibold')).toHaveText('Login failed');
});