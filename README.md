Cypress Testing Demo


This repository contains various **Cypress** test automation examples for web applications and APIs. The goal is to demonstrate best practices, explore advanced features, and create a learning environment for automated testing.


📌 What's Covered?


1. End-to-End (E2E) Testing
- 📌 Simulated login flow (filling in email, password, and authentication).
- 📌 Interaction with buttons, inputs, and UI components.
- 📌 Using the **Page Object Model (POM)** for better test organization.


2. API Testing (JSONPlaceholder)
- ✅ **GET:** Retrieving data from an endpoint.
- ✅ **POST:** Creating a new resource in the API.
- ✅ **PUT:** Updating an existing resource.
- ✅ **DELETE:** Removing a resource from the API.


3. Challenges and Solutions
- 🔧 Correctly configuring and importing **Page Objects**.
- 🔧 Resolving **Webpack Compilation Errors** and file import issues.
- 🔧 Handling **dynamic selectors** for UI components.
- 🔧 Dealing with **authentication** and complex form submissions.
- 🔧 Integrating with **CI/CD pipelines** (GitHub Actions).


💻 How to Run the Tests?
1. Clone the repository:
   ```sh
   git clone https://github.com/joseolimpio/demoCypress.git
   cd demoCypress
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run tests in the interactive mode:
   ```sh
   npx cypress open
   ```

4. Run tests in headless mode:
   ```sh
   npx cypress run
   ```
