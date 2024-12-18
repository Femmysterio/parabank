const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    //experimentalSessionAndOrigin: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 200000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm'
  },
});
