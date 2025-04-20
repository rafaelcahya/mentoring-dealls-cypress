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
