exports.hookPage=class hookPage{
    constructor(page){
        this.page=page;
        this.product_link_locator=page.locator("//a[@href='/products']");
    }
    async click_product_link(){
        await this.product_link_locator.click();
    }
    async product_one_link(){
        await this.page.locator("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/a[1]").click();
    }
}