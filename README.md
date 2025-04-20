# Mentor Sign In & Register – Automation Test (Cypress)

This project contains automated tests using **Cypress** to validate the key flows and field-level validations for the following features:

### Features Covered

- **Sign In**
  - Validation message when email is empty
  - Validation message when email format is invalid
  - Validation message when password is empty
  - Validation message when password is less than 8 characters
  - Password accepted when it is 8 characters or more
  - Submit button behavior based on field input

- **Mentor Registration**
  - Validation message when full name is empty
  - Validation message when email is empty and invalid
  - Validation message when WhatsApp number is empty, invalid, and not starting with country code
  - WhatsApp field limited to 15 digits
  - Validation message when LinkedIn or Instagram URLs are incorrectly formatted
  - Submit button disabled when form is incomplete
  - Navigation to step 2 upon successful input of required fields

---

### Tech Stack

- ✅ [Cypress](https://www.cypress.io/)
- ✅ JavaScript
- ✅ Modular custom commands for reusable logic
- ✅ Page object model structure using selector files

---

### Issue (GitHub Actions Fails, Local Passes)

Although all tests passed consistently on local, they kept failing on GitHub Actions. Here's a full list of what I’ve tried in order to fix the CI instability:

### Solutions I Tried (But Still Failing)

- **Switched from Electron to Chrome with `--headed` mode**
  - To simulate real browser rendering instead of default headless Electron
- **Increased timeout** on the failing assertion
  - Used `{ timeout: 8000 }` and even `{ defaultCommandTimeout: 10000 }`
- **Added `cy.wait()` to give the DOM more time**
  - Used `cy.wait(1000 - 60000)` before and after `.blur()`
- **Used `.blur()` after `.clear()`**
  - To make sure form validation gets triggered like a real user experience
- **Switched Node.js versions**
  - Tried `v16` and `v18` to check for compatibility differences
- **Captured screenshots and DOM snapshots in CI**
  - To confirm if the validation element was ever rendered in the CI browser

Despite all these efforts, the test continues to fail only in GitHub Actions — while always passing in local environments. This indicates it’s likely a race condition or headless rendering issue

### Additional Submission

I have also uploaded another file as part of this technical test:
Cahya Putra Ugira – SDET – Dealls.pdf
