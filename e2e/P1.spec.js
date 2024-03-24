import { test, expect } from '@playwright/test';

test("Allrecipes product search input", async ({ page }) => {
  await page.goto("https://www.allrecipes.com/");
  await expect(await page.title()).toBe('Allrecipes | Recipes, How-Tos, Videos and More');

  const productName = "bread";
  const productSearch = await page.locator('#mntl-search-form--open__search-input');
  await productSearch.fill(productName);

  const searchButton = await page.waitForSelector('.mntl-search-form__button');
  await searchButton.click();

  await expect(productSearch).toHaveValue(productName);


  const titleArrLocator = await page.locator('.card__title-text');
  const productTitleArr = await titleArrLocator.allTextContents();

  for(const item of productTitleArr) {
    await expect(item.toLowerCase()).toContain(productName.toLowerCase());
  }

  await page.pause();

});