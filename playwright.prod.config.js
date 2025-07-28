import { defineConfig } from '@playwright/test';


export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com/v1/',
    username: 'standard_user',
    password: 'secret_sauce',
    headless: true,
    trace: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report-prod' }]],
  // Optional: define projects or overrides here
  projects: [
    {
      name: 'GoogleChrome',
      use: {
        channel: 'chrome',   // this makes it use your installed Chrome
        headless: process.env.CI === 'true',     // show browser UI
        baseURL: 'https://www.saucedemo.com/v1/',  // repeat if you want to override/use
        username: 'standard_user',
        password: 'secret_sauce',
        trace: 'retain-on-failure',
      },
    },
    ],
});