// === Using Page Model Object pattern design ====

import { test, expect } from '@playwright/test';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Login from './pages/Login';

const URL = "https://www.allrecipes.com/";
const productName = "meat";

test.beforeAll(async ({playwright}) => {
  test.skip(
    !! process.env.PROD,
    'Test skipped due to data in production environment.'
  )
});

test.beforeEach('test', async({page}, testInfo) => {
  console.log(`Running ${testInfo.titlePath}`);
  await page.goto(URL);
  const homePage = new HomePage(page);
});

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.describe('Allrecipes Project', () => {
  
  test("Allrecipes product search input", async ({page}) => {
    //Variables
    const homePage = new HomePage(page);
    //Go to page
    await homePage.goToHomePage(URL);
    //Check for the item
    await homePage.searchForProduct(productName);
    // Save results
    const productTitleArr = await homePage.getTitleTextContents();
    // Assertion for the given name
    for (const item of productTitleArr) {
      await expect(item.toLowerCase()).toContain(productName.toLowerCase());
    }
  });

  test("Allrecipes Mainly Menu", async({page})=> {
    const menuPage = new MenuPage(page);
    await menuPage.hoverDinners();
    await menuPage.hoverMeals();
    await menuPage.hoverIngredients();
    await menuPage.hoverOccasions();
    await menuPage.hoverCusines();
    await menuPage.hoverCusines();
    await menuPage.hoverKitchentips();
    await menuPage.hoverNews();
    await menuPage.hoverFeatures();
    await menuPage.hoverAboutus();
  });

  // For this test you will need create your own username and password and set it on .env file.
  test("Allrecipes Login", async({page}, testInfo)=>{
    const login = new Login(page);

    const user = testInfo.project.use.env_var;
    const password = testInfo.project.use.env_var2;
    await login.LoadPageLogin();
    await login.LoginEmailSuccess(user, password);
  });

})

