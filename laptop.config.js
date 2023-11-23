const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //MacBook Air 2020
  viewportWidth: 2560,
  viewportHeight: 1600,
});