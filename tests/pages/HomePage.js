export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto("https://www.allrecipes.com/");
    //await this.page.waitForLoadState('networkidle');
  }

  async searchForProduct(productName) {
    const productSearch = await this.page.locator('[id="mntl-search-form--open__search-input"]');
    await productSearch.fill(productName);

    const searchButton = await this.page.waitForSelector('.mntl-search-form__button');
    await searchButton.click();
  }

  async getTitleTextContents() {
    const titleArrLocator = await this.page.locator('.card__title-text');
    return await titleArrLocator.allTextContents();
  }
}