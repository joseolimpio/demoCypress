const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/examples/**/*.cy.{js,jsx,ts,tsx}', // Padrão para procurar arquivos de teste
  },
});
