const{test,expect}=require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const testdata=JSON.parse(JSON.stringify(require("../testdata2.json")));

test.describe("Data Driven Login Test",function(){
    for(const data of testdata ){
        test.describe(`Login with users ${data.username}`,function(){
            test('Login to Application', async({page}) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator("//input[@id='email1']").fill(data.username);
                await page.locator("//input[@id='password1']").fill(data.password);
                await page.locator("//button[normalize-space()='Sign in']").click();
                await delay(5000)
            })
        })
    }
})

for(const data of testdata ){
        test(`Login with users ${data.username}`, async({page}) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.locator("//input[@id='email1']").fill(data.username);
            await page.locator("//input[@id='password1']").fill(data.password);
            await page.locator("//button[normalize-space()='Sign in']").click();
            await delay(5000)
        })
}


