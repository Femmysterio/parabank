/// <reference types="cypress" />

class transfer {

    element = { 
        openNewAccount: () => cy.contains('Open New Account'),
        transferFunds: () => cy.get('[href*="transfe"]'),
        amount: () => cy.get('#amount'),
        fromAccount: () => cy.get('#fromAccountId'),
        toAccount: () => cy.get('#toAccountId'),
    }

    transferBtn () {
        return cy.get('[value="Transfer"]')
    }

    assertTransferCompleted (value) {
        return cy.get('#showResult > h1').should('have.text', value)
    }
    
}

module.exports = new transfer