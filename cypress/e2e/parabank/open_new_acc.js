/// <reference types="cypress" />

import login from '../../support/parabank_pom/login_pom'
import newAccount from '../../support/parabank_pom/open_new_acc_pom'

describe('Validate open new account', () => {

    const username = 'olajidey03'
    const password = 'Femmy@2000'

    //i had to include the action triggers(i.e click, select, type) here instead of POM file for clarity
    it('Verify customer can open new account', () => {
        cy.clearCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();
        //cy.login('Femmysterio17', 'Femmy@2000'); // can also make use of the command.js file

        newAccount.element.openNewAccount().click();
        newAccount.element.assertOpenNewAccPage('Open New Account');
        newAccount.element.selectAccountType().select('SAVINGS');
        newAccount.element.selectMinimumDeposit().select('18006');
        newAccount.element.openNewAccBtn().click();
        newAccount.element.assertNewAcc('Congratulations, your account is now open.');

    })
})