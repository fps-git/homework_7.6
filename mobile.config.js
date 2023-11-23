const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //iPhone12Pro
  viewportWidth: 1170,
  viewportHeight: 2532,
});