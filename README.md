# Contact List App
This application provides an easy way to manage contacts. Users can:

* Sign In to their existing account
* Sign Up to create a new account
* Log Out when they are done using the app
* Add new contacts to their personal contact list

### Installation
1. Clone the repository:
```bash
    git clone https://github.com/selmahabota/atlantbh.git
```
2. Navigate to the project directory:
```bash
    cd atlantbh
```
3. Install cypress using command:
```bash
    npm install cypress --save-dev
```
### Running Cypress Tests

1. To run tests in an interactive mode:
    ```bash
    npx cypress open
    ```
2. To run smoke tests in Headless mode using Electron browser:
    ```bash
    npm run runSmokeTestsHeadlessElectron
    ```
3. To run smoke tests in Headed mode using Electron browser:
    ```bash
    npm run runSmokeTestsHeadedElectron
    ```
4. To run smoke tests in Headless mode using Chrome browser:
    ```bash
    npm run runSmokeTestsHeadlessChrome
    ```
5. To run smoke tests in Headed mode using Chrome browser:
    ```bash
    npm run runSmokeTestsHeadedChrome
    ```
6. To run regression tests in Headless mode using Electron browser:
    ```bash
    npm run runRegressionTestsHeadlessElectron
    ```
7. To run regression tests in Headed mode using Electron browser:
    ```bash
    npm run runRegressionTestsHeadedElectron
    ```
8. To run regression tests in Headless mode using Chrome browser:
    ```bash
    npm run runRegressionTestsHeadlessChrome
    ```
9. To run regression tests in Headed mode using Chrome browser:
    ```bash
    npm run runRegressionTestsHeadedChrome
    ```

10. To run all tests in Headless mode using Electron browser:
    ```bash
    npm run runAllTestsHeadlessElectron
    ```
11. To run all tests in Headed mode using Electron browser:
    ```bash
    npm run runAllTestsHeadedElectron
    ```
12. To run all tests in Headless mode using Chrome browser:
    ```bash
    npm run runAllTestsHeadlessChrome
    ```
13. To run all tests in Headed mode using Chrome browser:
    ```bash
    npm run runAllTestsHeadedChrome
    ```
Tests include both Smoke and Regression test cases, as well as Positive and Negative test cases.

This project includes both **UI** and **API** testing to ensure functionality across the application.

### UI Tests:
- End-to-end testing for the user interface using **Cypress**.
- Tests ensure that the user can interact with various elements of the application (buttons, forms, etc.), and validates that expected behavior occurs.
- The tests are executed across multiple browsers to ensure consistent user experience and cross-browser compatibility.

### API Tests:
- **API** tests are implemented using **Cypress** to test the backend services.
- Various endpoints are validated to ensure correct HTTP status codes, request-response data structure, and proper API behavior.
- These tests are also performed in different browsers to verify that the API responses remain consistent and function as expected across platforms.
