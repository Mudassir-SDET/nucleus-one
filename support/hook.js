// support/hooks.js
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  // launch browser for this scenario
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
});

After(async function () {
  // close browser for this scenario
  await this.page.close();
  await this.browser.close();
});