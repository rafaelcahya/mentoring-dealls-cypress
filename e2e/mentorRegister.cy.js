import "../support/command/commands";

import config from "../support/selectors/config";
import mentorRegisterSelector from "../support/selectors/mentorRegisterSelector";
import data from "../support/selectors/data";

describe("Employer Register Page", () => {
    beforeEach(() => {
        cy.visit(
            `${config.userBaseUrl}${config.lang}${config.mentorRegisterUrl}`
        );
    });
    it("should show validation message when full name is empty", () => {
        cy.typeUniqueValue(mentorRegisterSelector.fullNameField, "create", 5);
        cy.get(mentorRegisterSelector.fullNameField).clear();
        cy.verifyValidationMsg(
            mentorRegisterSelector.fullNameHelperBox,
            mentorRegisterSelector.emptyFullnameMsg
        );
    });
    it("should show validation message when email is empty", () => {
        cy.typeUniqueValue(mentorRegisterSelector.emailField, "create", 5);
        cy.get(mentorRegisterSelector.emailField).clear();
        cy.verifyValidationMsg(
            mentorRegisterSelector.emailHelperBox,
            mentorRegisterSelector.emptyEmailMsg
        );
    });
    it("should show validation message when email format is invalid", () => {
        cy.typeUniqueValue(mentorRegisterSelector.emailField, "create", 5);
        cy.verifyValidationMsg(
            mentorRegisterSelector.emailHelperBox,
            mentorRegisterSelector.wrongFormatEmailMsg
        );
    });
    it("should show validation message when whatsapp number is empty", () => {
        cy.typeUniqueValue(mentorRegisterSelector.whatsappField, 5);
        cy.get(mentorRegisterSelector.whatsappField).clear();
        cy.verifyValidationMsg(
            mentorRegisterSelector.whatsappHelperBox,
            mentorRegisterSelector.emptyWhatsappMsg
        );
    });
    it("should show validation message when whatsapp number is invalid", () => {
        cy.typeUniqueValue(mentorRegisterSelector.whatsappField, 5);
        cy.verifyValidationMsg(
            mentorRegisterSelector.whatsappHelperBox,
            mentorRegisterSelector.invalidWhatsappMsg
        );
    });
    it("should show validation message when whatsapp number does not start with country code", () => {
        cy.typeValue(mentorRegisterSelector.whatsappField, "0877");
        cy.verifyValidationMsg(
            mentorRegisterSelector.whatsappHelperBox,
            mentorRegisterSelector.invalidCountryCodeWhatsappMsg
        );
    });
    it("should limit whatsapp input to a maximum of 15 digits", () => {
        cy.typeUniqueValue(mentorRegisterSelector.whatsappField, "99", 20);
        cy.get("@typedValue").then((typed) => {
            const expected = typed.slice(0, 15);
            cy.get(mentorRegisterSelector.whatsappField).should(
                "have.value",
                expected
            );
        });
    });
    it("should show validation message when linkedin url format is invalid", () => {
        cy.typeUniqueValue(mentorRegisterSelector.linkedinField, "create", 5);
        cy.verifyValidationMsg(
            mentorRegisterSelector.linkedinHelperBox,
            mentorRegisterSelector.linkedinUrlFormatMsg
        );
    });
    it("should show validation message when instagram url format is invalid", () => {
        cy.typeUniqueValue(mentorRegisterSelector.instagramField, "create", 5);
        cy.verifyValidationMsg(
            mentorRegisterSelector.instagramHelperBox,
            mentorRegisterSelector.instagramUrlFormatMsg
        );
    });
    it("should disable the next button when all mandatory fields are empty", () => {
        cy.get(mentorRegisterSelector.fullNameField).clear();
        cy.get(mentorRegisterSelector.emailField).clear();
        cy.get(mentorRegisterSelector.whatsappField).clear();
        cy.get(mentorRegisterSelector.submitBtn).should("be.disabled");
    });
    it("should enable the next button when all mandatory fields are filled", () => {
        cy.typeValue(mentorRegisterSelector.fullNameField, data.fullname);
        cy.typeValue(mentorRegisterSelector.emailField, data.email);
        cy.typeValue(mentorRegisterSelector.whatsappField, data.whatsapp);
        cy.get(mentorRegisterSelector.submitBtn).should("be.enabled");
    });
});
