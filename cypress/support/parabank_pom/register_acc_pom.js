/// <reference types="cypress" />

class registerAccount {

    element = {
        assertUrlShouldInclude: (value) => cy.url().should('include', value),
        registerLink: () => cy.contains('Register'),
        assertTitleText: (value) => cy.get('#rightPanel').find('.title').should('include.text', value),
        firstNameField: () => cy.get('input[name="customer.firstName"]'),
        lastNameField: () => cy.get('input[name="customer.lastName"]'),
        addressField: () => cy.get('input[name="customer.address.street"]'),
        cityField: () => cy.get('input[name="customer.address.city"]'),
        stateField: () => cy.get('input[name="customer.address.state"]'),
        zipCodeField: () => cy.get('input[name="customer.address.zipCode"]'),
        phoneField: () => cy.get('input[name="customer.phoneNumber"]'),
        ssnField: () => cy.get('input[id="customer.ssn"]'),
        usernameField: () => cy.get('input[id="customer.username"]'),
        passwordField: () => cy.get('input[id="customer.password"]'),
        confirmField: () => cy.get('#repeatedPassword'),
        registerBtn: () => cy.get('[value="Register"]'),
        assertCreatedAccount: (value) => cy.get('#rightPanel > p').should('include.text', value),
        
    }
    
}

module.exports = new registerAccount