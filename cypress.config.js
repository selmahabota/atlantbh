const { defineConfig } = require('cypress')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    specPattern: 'cypress/e2e/**/*.spec.js',
    
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',

    env: {
      apiUrl: 'https://thinking-tester-contact-list.herokuapp.com/'
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
    
  }
})
