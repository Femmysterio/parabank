/// <reference types="cypress" />

import registerAccount from '../../support/parabank_pom/register_acc_pom'

describe('New Account', () => {

    const firstName = 'Oluwafemi'
    const lastName = 'Orungbeja'
    const address = 'No.71, otitokoro street'
    const city = 'Ikotun'
    const state = 'Lagos'
    const ZIP = '+23401'
    const phone = '08140972006'
    const SSN = '001'
    const username = 'olajidey03'
    const password = 'Femmy@2000'

    //change the username to run this test case, and change accross other files as it expires
    //Therefore run this file first before running others
    it('Validate User can register new account', () => {
        cy.clearCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        registerAccount.element.assertUrlShouldInclude('parabank');
        registerAccount.element.registerLink().click();
        registerAccount.element.assertTitleText('Signing up is easy!');
        registerAccount.element.firstNameField().type(firstName);
        registerAccount.element.lastNameField().type(lastName);
        registerAccount.element.addressField().type(address);
        registerAccount.element.cityField().type(city);
        registerAccount.element.stateField().type(state);
        registerAccount.element.zipCodeField().type(ZIP);
        registerAccount.element.phoneField().type(phone);
        registerAccount.element.ssnField().type(SSN);
        cy.wait(2000);
        registerAccount.element.usernameField().type(username);
        registerAccount.element.passwordField().type(password);
        registerAccount.element.confirmField().type(password);
        registerAccount.element.registerBtn().click({force:true});
        registerAccount.element.assertCreatedAccount('Your account was created successfully.');
    });
});