// === Using Page Model Object pattern design ====

import { test, expect } from '@playwright/test';
import HomePage from './pages/HomePage';

test("Allrecipes product search input", async ({ page }) => {
  
  //Variables
  const URL = "https://www.allrecipes.com/";
  const productName = "meat";

  //Go to page
  const homePage = new HomePage(page);
  await homePage.goToHomePage(URL);

  //Check for the item
  await homePage.searchForProduct(productName);

  // Safe results
  const productTitleArr = await homePage.getTitleTextContents();

  // Assertion for the given name

  for (const item of productTitleArr) {
    await expect(item.toLowerCase()).toContain(productName.toLowerCase());
  }

  await page.pause();
});