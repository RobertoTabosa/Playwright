import { test, expect } from '@playwright/test';

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto("https://www.allrecipes.com/");
    //await this.page.waitForLoadState('networkidle');
    expect (await this.page.title()).toBe('Allrecipes | Recipes, How-Tos, Videos and More');
  }

  async searchForProduct(productName) {
    this.page.getByPlaceholder('Find a recipe or ingredient').fill(productName);

    const searchButton = await this.page.waitForSelector('.mntl-search-form__button');
    await searchButton.click();
    await expect(this.page.getByText('Search Results For')).toBeVisible();
  }

  async getTitleTextContents() {
    const titleArrLocator = await this.page.locator('.card__title-text');
    return await titleArrLocator.allTextContents();
  }
}
