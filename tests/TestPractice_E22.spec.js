const { test, expect,chromium } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test.describe.serial('TEST CASE 1-Validate registration using valid data:-', async () => {
    let page;
    test.beforeAll("Browser is open without fixture",async()=>{
        test.setTimeout(60000);
        const browser=await chromium.launch();
        const context=await browser.newContext();
        page=await context.newPage();
    })
    test.afterAll("Browser is closed without fixture",async()=>{
        page.close();
    })
    test('Open current browser and disable notifications', async () => {
        await page.goto("https://www.nop-station.com/");
        await page.click("//button[@id='close-push-notification']");
      });
    test('Hover the item and click register button', async () => {
        await page.hover("//body/div[@class='master-wrapper-page']/div[@class='header']/div[@class='container']/div[@class='header-lower']/div[@class='header-links-wrapper']/div[@class='header-links']/ul/li[@class='user-dropdown-menu']/a[1]");
        await page.click("//li[@class='user-dropdown-menu']//ul[@class='user-dropdown']//li//a[@class='ico-register'][normalize-space()='Register']");
        await page.waitForTimeout(5000);
      });
});