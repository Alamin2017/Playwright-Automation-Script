const { test } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import { hookPage } from '../pages/hook_page';
test.describe.serial('TEST SUITE', async () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://automationexercise.com/');
  });
  test('Test 1', async ({}) => {
    const hook_obj=new hookPage(page);
    await hook_obj.click_product_link();
  });
  test('Test 2', async ({}) => {
    const hook_obj=new hookPage(page);
    await hook_obj.product_one_link();
  });
});
