// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();

test.beforeEach(async({page}) => {
    //  await page.setViewportSize({ width: 1440, height: 1080 });
    test.setTimeout(60000);
    await page.goto('https://automationexercise.com/');
});

test.afterEach(async ({page})=>{
    await page.close();
});

  test('Add Product E2E Test:::',async({page}) => {

    await expect(page.locator("//a[normalize-space()='Home']")).toHaveText("Home")
    await page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click();
    await page.locator("//button[normalize-space()='Add to cart']").click();
    await page.locator("//u[normalize-space()='View Cart']").click();
    await page.locator("//a[normalize-space()='Proceed To Checkout']").click();
    await page.locator("//u[normalize-space()='Register / Login']").click();
    await page.locator('//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]').fill('tania');
    await page.locator("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]").fill(randomEmail);
    await page.locator("//*[@id=\"form\"]/div/div/div[3]/div/form/button").click();
    await page.locator("//*[@id=\"id_gender1\"]").check();
    await page.locator("//*[@id=\"password\"]").fill('34567890');
    await page.locator('#days').selectOption('14');
    await page.locator('#months').selectOption('7');
    await page.locator('#years').selectOption('2006');
    await page.locator("//*[@id=\"newsletter\"]").check();
    await page.locator("//*[@id=\"optin\"]").check();
    await page.locator("//*[@id=\"first_name\"]").fill('tania');
    await page.locator("//*[@id=\"last_name\"]").fill('akter');
    await page.locator("//*[@id=\"address1\"]").fill('dhaka');
    await page.locator("//*[@id=\"state\"]").fill("Dhaka");
    await page.locator("//*[@id=\"city\"]").fill("Khilkhet");
    await page.locator("//*[@id=\"zipcode\"]").fill("1229");
    await page.locator("//*[@id=\"mobile_number\"]").fill("01723456721");
    await page.locator("//*[@id=\"form\"]/div/div/div/div[1]/form/button").click();
    await expect(page.locator("//b[normalize-space()='Account Created!']")).toHaveText("Account Created!");
    await page.locator("//*[@id=\"form\"]/div/div/div/div/a").click();
    await expect(page.locator("//header[@id='header']//li[10]")).toHaveText("Logged in as tania");
    await page.locator("//a[normalize-space()='Cart']").click();
    await page.locator("//a[normalize-space()='Proceed To Checkout']").click();
    await expect(page.locator("//h2[normalize-space()='Address Details']")).toHaveText("Address Details");
    await expect(page.locator("//h2[normalize-space()='Review Your Order']")).toHaveText("Review Your Order");
    await page.locator("//textarea[@name='message']").fill("Already order some products");
    await page.locator("//a[normalize-space()='Place Order']").click();
    await page.locator('input[name="name_on_card"]').fill('sumon');
    await page.locator('input[name="card_number"]').fill('4485233521979909');
    await page.locator("//input[@placeholder='ex. 311']").fill("748");
    await page.locator("//input[@placeholder='MM']").fill("9");
    await page.locator("//input[@placeholder='YYYY']").fill("2025");
    await page.locator("//button[@id='submit']").click();
    await delay(2000);
    await expect(page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']")).toContainText('Congratulations! Your order has been confirmed!');
  
  });