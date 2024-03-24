
const { defineConfig, devices } = require('@playwright/test'); //CHANGED
//import { defineConfig, devices } from '@playwright/test';  //CHANGED
import baseEnvUrl from './utils/environmentBaseUrl';       //CHANGED

// @ts-check


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();  //CHANGED

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
 // testDir: './tests',          //CHANGED
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,    //CHANGED
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    {     // CHANGED
      name: 'all-browsers-and-tests',
      use: {
        baseURL: 'https://playwright.dev/',
      },
    },

    {   // EXAMPLE ONLY   CHANGED
      name: 'local',
      use: { 
        baseURL: baseEnvUrl.local.home,
       },
    },

    {   // Example only    CHANGED
      name: 'ci',
      use: { 
        baseURL: process.env.CI
        ? baseEnvUrl.ci.prefix + process.env.github_ref_name + baseEnvUrl.ci.suffix //https:dev-myapp-c...
        : baseEnvUrl.staging.home,
       },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

