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

2. To run all tests in Headless mode using Electron browser:
    ```bash
    npm run runAllTestsHeadlessElectron
    ```
3. To run all tests in Headed mode using Electron browser:
    ```bash
    npm run runAllTestsHeadedElectron
    ```
4. To run all tests in Headless mode using Chrome browser:
    ```bash
    npm run runAllTestsHeadlessChrome
    ```
5. To run all tests in Headed mode using Electron browser:
    ```bash
    npm run runAllTestsHeadedChrome
    ```
