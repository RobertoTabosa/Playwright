// @ts-check
//import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/); // Expect a title "to contain" a substring.
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/'); 
//   await page.getByRole('link', { name: 'Get started' }).click(); // Click the get started link.
//     await expect(page).toHaveURL(/.*intro/);
// });


// /**
// 1. Open the page
// 2. Click at Get started
// 3. Mouse hover the language dropdowm
// 4. click at Java
// 5. Check the URL
// 6. Chek the text "Installing Playwright" is not being displayed
// 7. Check the text below is displayed

// Playwright is distributed as a set of Maven modules. The easiest way to use
// */

// test('check Java page', async ({page}) => {
//   await page.goto ('https://playwright.dev');
//   await page.getByRole('link', {name: 'Get started'}).click();
//   await page.getByRole('button', {name: 'Node.js'}).hover();
//   await page.getByText('Java', {exact:true}).click();

//   await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
//   await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible;
//   const javaDescription = `Playwright is distributed as a set of Maven modules.`;
//   await expect(page.getByText(javaDescription)).toBeVisible();
// });



//================== projeto1

// import { test, expect } from '@playwright/test';

// test("Allrecipes product search input", async ({ page }) => {
//   await page.goto("https://www.allrecipes.com/");

//   const productName = "Bread";
//   const productSearch = page.getByPlaceholder("Find a recipe or ingredient").fill(productName);
//   // const productSearch = page.getByPlaceholder("textbox", {
//   //   name: "Find a recipe or ingredient",
//   // });

//   const searchButton = await page.waitForSelector('.mntl-search-form__button');


//   //const searchButton = page.getByRole("button", { name: "Click to search" });
//   //await productSearch.fill(productName);

//   await test.step("repeat after running a search", async () => {
//     await searchButton.click();
//     await expect(productSearch).toHaveValue(productName);
//   });
// });


import { test, expect } from '@playwright/test';

test("Allrecipes product search input", async ({ page }) => {
  await page.goto("https://www.allrecipes.com/");

  const productName = "bread";
  const productSearch = await page.locator('#mntl-search-form--open__search-input');
  await productSearch.fill(productName);

  const searchButton = await page.waitForSelector('.mntl-search-form__button');
  await searchButton.click();

  await expect(productSearch).toHaveValue(productName);

});

// test("All products must have the word in the name", async ({page})=>{
//   const titleArrLocator = await page.locator('.card__title-text');
//   const productTitleleArr = await titleArrLocator.allTextContents();

//   await page.pause();

// });