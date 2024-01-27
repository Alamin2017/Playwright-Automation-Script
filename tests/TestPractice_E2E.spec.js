const { test, expect,chromium } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
test.describe.serial('TEST SUITE', async () => {
    test('Part 3', async ({page}) => {
      test.setTimeout(60000);
      await page.goto("https://www.demoblaze.com/index.html");
      console.log("Page URL is   : ",await page.url());
      await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
      console.log("Page Title is : ",await page.title());
      await expect(page).toHaveTitle("STORE");
      const pageURL=await page.url();
      console.log("Page URL is   : ",pageURL);
    });
    test('Part 4', async ({page}) => {
      test.setTimeout(60000);
      await page.goto("https://www.demoblaze.com/index.html");
      await page.click("//a[@id='login2']");
      await page.fill("//input[@id='loginusername']","pavanol");
      await page.fill("//input[@id='loginpassword']","test@123");
      await page.click("//button[normalize-space()='Log in']");
      const logout_link=await page.locator("//a[@id='logout2']");
      await expect.soft(logout_link).toBeVisible();
      await delay(5000);
      });
      test('Part 4 and 5 ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://www.demoblaze.com/index.html");
        const links=await page.$$('a');
        for(const link of links){
          const link_text=await link.textContent();
          console.log(link_text);
        }
        await page.waitForSelector('//*[@id="tbodyid"]//h4/a')
        const products=await page.$$('//*[@id="tbodyid"]//h4/a');
        expect(products).toHaveLength(9);
        for(const product of products){
          const prodName=await product.textContent();
          console.log(prodName);
        }
        await delay(5000);
      });
      test('Part assertions ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://www.demoblaze.com/index.html");
        await expect.soft(page).toHaveTitle('STORE');
        await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
      });
      test('Drop Down', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://testautomationpractice.blogspot.com/");
        // await page.locator("//select[@id='country']").selectOption({label:'India'});

        //await page.locator("//select[@id='country']").selectOption('India');

        // await page.locator("//select[@id='country']").selectOption({value:'uk'});

        // await page.locator("//select[@id='country']").selectOption({index:2});

        // await page.selectOption("#country",'India');

        // const options=await page.locator("//select[@id='country']//option");
        // await expect(options).toHaveCount(10);

        // const options=await page.$$("//select[@id='country']//option");
        // console.log("Number of options:",options.length);
        // await expect(options.length).toBe(10);

        // const options=await page.$$("//select[@id='country']//option");
        // let status=false;
        // for(const option of options){
        //   // console.log(await option.textContent());
        //   let value=await option.textContent();
        //   if(value.includes('France')){
        //     status=true;
        //     break;
        //   }
        // }
        // expect(status).toBeTruthy();

        // await page.selectOption('#colors',['Blue','Red','yellow']);
        await page.waitForTimeout(5000);
      });
      test('Drop Down 2 ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://www.redbus.in/");
        await page.locator("//input[@id='src']").fill("Delhi");
        await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
        const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
        for(let option of fromCityOptions){
          const value=option.textContent();
          console.log(value);
        }
        await page.waitForTimeout(3000);
      });

      test('Drop Down 3 ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        await page.locator("//input[@placeholder='Username']").fill("Admin");
        await page.locator("input[placeholder='Password']").fill("admin123");
        await page.locator("//button[normalize-space()='Login']").click();
        await page.locator("//span[text()='PIM']").click();
        await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
        await page.waitForTimeout(3000);
      });
      test('frame ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://ui.vision/demo/webtest/frames/");
        const all_frames=await page.frames();
        console.log("Total number of frames:",all_frames.length)
        await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']").fill("Al-Amin");
        await page.waitForTimeout(3000);
      });
      test('date picker ', async ({page}) => {
        test.setTimeout(60000);
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("//input[@id='datepicker']").click();
        await page.locator("//input[@id='datepicker']").fill("01/17/2024")
        await page.waitForTimeout(3000);
      });
      test('Without-fixtures', async () => {
        test.setTimeout(60000);
        const browser=await chromium.launch();

        const context1=await browser.newContext();
        const page1=await context1.newPage();
        await page1.goto("https://www.nop-station.com/");

        const context2=await browser.newContext();
        const page2=await context2.newPage();
        await page2.goto("https://www.nop-station.com/");

        await page2.waitForTimeout(3000);
        

      });
      test('Without-fixtures 2', async () => {
        test.setTimeout(60000);
        const browser=await chromium.launch();
        const context=await browser.newContext();
        
        const page1=await context.newPage();
        await page1.goto("https://www.nop-station.com/");
        const page2=await context.newPage();
        await page2.goto("https://www.nop-station.com/");
        await page2.waitForTimeout(3000);
      });
      test('Without-fixtures 3', async () => {
        test.setTimeout(60000);
        const browser=await chromium.launch();
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://www.nop-station.com/");
        await page.click("//button[@id='close-push-notification']");
        await page.hover("//body/div[@class='master-wrapper-page']/div[@class='header']/div[@class='container']/div[@class='header-lower']/div[@class='header-links-wrapper']/div[@class='header-links']/ul/li[@class='user-dropdown-menu']/a[1]");
        await page.click("//li[@class='user-dropdown-menu']//ul[@class='user-dropdown']//li//a[@class='ico-register'][normalize-space()='Register']");
        await page.waitForTimeout(10000);
      });

  });