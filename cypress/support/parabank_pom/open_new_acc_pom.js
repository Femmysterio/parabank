/// <reference types="cypress" />

class newAccount {

    element = {
        openNewAccount: () => cy.get('[href="openaccount.htm"]'),
        assertOpenNewAccPage: (value) => cy.get('#openAccountForm > .title').should('have.text', value),
        selectAccountType: () => cy.get('#type'),
        selectMinimumDeposit: () => cy.get('#fromAccountId'),
        openNewAccBtn: () => cy.get('[value="Open New Account"]'),
        assertNewAcc: (value) => cy.get('#openAccountResult > p').eq(0).should('include.text', value)

    }

}

module.exports = new newAccount