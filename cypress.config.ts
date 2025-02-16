const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "fxatur",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})