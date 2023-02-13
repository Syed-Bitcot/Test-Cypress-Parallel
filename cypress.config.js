const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "32pbdr",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
