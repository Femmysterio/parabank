/// <reference types="cypress" />

/// <reference types="cypress" />

import login from '../../support/parabank_pom/login_pom'
import loan from '../../support/parabank_pom/request_loan_pom'

describe('Validate open new account', () => {

    const username = 'olajidey03'
    const password = 'Femmy@2000'

    //i had to include the action triggers(i.e click, select, type) here instead of POM file for clarity
    it('Verify customer can Request Loan', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();

        loan.element.requestloan().click();
        loan.element.assertLoanPage('Apply for a Loan');
        loan.element.loanAmount().type('5,000,000');
        loan.element.downPayment().type('2,000,000');
        loan.applyNowBtn().click()
        
    })
})