import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    env: {
      apiBaseUrl: "https://fakerestapi.azurewebsites.net"
    },
    video: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
