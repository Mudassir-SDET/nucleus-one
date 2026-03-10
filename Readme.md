# Nucleus One - Playwright + Cucumber Automation Tests

## Project Overview

This project contains automated login tests for the **Nucleus One application** using **Playwright with JavaScript** and **Cucumber** for BDD-style testing.  

The tests cover both **positive (happy path)** and **negative login scenarios**, verifying the login functionality and error messages.

---

## Tech Stack

* **Playwright** – browser automation  
* **Cucumber JS** – BDD framework for defining scenarios  
* **JavaScript / Node.js** – scripting and test execution  

---

## Project Structure
nucleus-one
│
├── pages
│ └── login.page.js # Page Object for Login page
│
├── tests
│ └── login.spec.js # Playwright test cases (optional, parallel to Cucumber)
│
├── features
│ └── login.feature # Cucumber feature file with scenarios
│
├── step-definitions
│ └── login.steps.js # Step definitions for feature file
│
├── support
│ └── hooks.js # Cucumber hooks to launch/close browser
│
├── test-data
│ └── users.json # Test credentials for positive/negative scenarios
│
├── playwright.config.js # Playwright configuration
├── cucumber.js # Cucumber configuration
├── package.json # Project dependencies
└── README.md # Project documentation

---

## Test Scenarios Covered

### Positive Test

* Login with **valid email and password**  
* Verify the user successfully reaches the dashboard

### Negative Tests

1. Login with **invalid email**  
2. Login with **invalid password**  

Both should display the error message:

---


---


---

## Installation & Running Tests

### Run Playwright Tests

```bash
npm install                     # install dependencies
npx playwright test             # run all Playwright tests
npx playwright test --headed    # run with browser visible
npx playwright show-report      # view HTML report
``` 
## Run Cucumber + Playwright BDD Tests
```bash
npx cucumber-js --require support/**/*.js --require step-definitions/**/*.js
``` 
## Notes

Hooks are now used to manage browser instances per scenario — no world.js is required.

Each scenario runs in its own isolated browser session, preventing conflicts.

Step definitions use this.page from hooks to interact with Playwright page objects.

## Author
Mudassir Moavia
SQA Engineer