/// <reference types="cypress" />

import login from '../../support/parabank_pom/login_pom'
import transfer from '../../support/parabank_pom/transfer_funds_pom'

describe('Validate funds Transfer', () => {

    const username = 'olajidey03'
    const password = 'Femmy@2000'

    //i had to include the action triggers(i.e click, select, type) here instead of POM file for clarity
    it('Verify Customer can transfer funds successfully', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();

        transfer.element.transferFunds().click();
        transfer.element.amount().type('800,000');
        transfer.element.fromAccount().select('18006');
        transfer.element.toAccount().select('19782');
        transfer.transferBtn();
        transfer.assertTransferCompleted('Transfer Complete!');
    })
})