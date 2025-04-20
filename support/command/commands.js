Cypress.Commands.add("typeValue", (selector, value) => {
    cy.clickElements(selector);
    cy.get(selector).type(value);
});

Cypress.Commands.add(
    "typeUniqueValue",
    (selector, prefix = "create", digit = 10) => {
        const rawNumber = Date.now().toString();
        const uniqueNumber = rawNumber.slice(-digit);
        const finalText = `${prefix}${uniqueNumber}`;

        cy.clickElements(selector);
        cy.clearElements(selector);
        cy.get(selector, { timeout: 60000 })
            .type(finalText)
            .then(() => {
                cy.wrap(finalText).as("typedValue");
            });
    }
);

Cypress.Commands.add("clickElements", (selector) => {
    cy.get(selector).click();
});

Cypress.Commands.add("clearElements", (selector) => {
    cy.get(selector).clear();
});

Cypress.Commands.add("verifyValidationMsg", (selector, expectedText) => {
    cy.get(selector).should("be.visible").and("contain.text", expectedText);
});
