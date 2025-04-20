import "../support/command/commands";

import config from "../support/selectors/config.js";
import loginSelector from "../support/selectors/loginSelector.js";

describe("Sign In Page", () => {
    beforeEach(() => {
        cy.visit(`${config.userBaseUrl}${config.signinUrl}`);
    });
    it("should show validation message when email is empty", () => {
        cy.get(loginSelector.emailField).clear();
        cy.contains("button", loginSelector.signinBtn).click();
        cy.verifyValidationMsg(
            loginSelector.emailHelperBox,
            loginSelector.emptyEmailMsg
        );
    });
    it("should show validation message when email format is invalid", () => {
        cy.typeUniqueValue(loginSelector.emailField, "create", 5);
        cy.verifyValidationMsg(
            loginSelector.emailHelperBox,
            loginSelector.invalidFormatEmailMsg
        );
    });
    it("should show validation message when password is empty", () => {
        cy.get(loginSelector.passwordField).clear();
        cy.contains("button", loginSelector.signinBtn).click();
        cy.verifyValidationMsg(
            loginSelector.passwordHelperBox,
            loginSelector.emptypasswordMsg
        );
    });
    it("should show validation message when password is less than 8 characters", () => {
        cy.typeUniqueValue(loginSelector.passwordField, "create", 1);
        cy.verifyValidationMsg(
            loginSelector.passwordHelperBox,
            loginSelector.minCharPasswordMsg
        );
    });
    it("should accepted when password is more than 8 characters", () => {
        cy.typeUniqueValue(loginSelector.passwordField, "create", 10);
        cy.get(loginSelector.passwordHelperBox).should("not.exist");
    });
});
