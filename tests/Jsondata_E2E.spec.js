const { test, expect } = require('@playwright/test');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const test_data=JSON.parse(JSON.stringify(require("../testdata.json")));
import { loginPage } from '../pages/login_page';

test.describe('test suite', () => {
    
    test.beforeEach(async({page}) => {
        const login_obj=new loginPage(page);
        await login_obj.navigate_url();
   });
   test.afterEach(async ({page})=>{
       await page.close();
   })
    test('Login with valid credentials1',async({page}) => {
        const login_obj=new loginPage(page);
        await login_obj.login_valid_credentials(test_data.user.username,test_data.user.password);
        await login_obj.click_login_button();
        await delay(3000);
    });
    test('Login with valid credentials2',async({page}) => {
        const login_obj=new loginPage(page);
        await login_obj.login_valid_credentials(test_data.user.username,test_data.user.password);
        await login_obj.click_login_button();
        await delay(3000);
    });
    
});













