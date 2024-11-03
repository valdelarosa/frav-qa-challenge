const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.fravega.com/',
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    testIsolation: false,
    env: {
      password: ''
    }
  },
});
