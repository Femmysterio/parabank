/// <reference types="cypress" />

class loan {

    element = { 
        requestloan: () => cy.get('[href*="request"]'),
        assertLoanPage: (value) => cy.get('#requestLoanForm > h1').should('include.text', value),
        loanAmount: () => cy.get('#amount'),
        downPayment: () => cy.get('#downPayment'),
        selectFromAccount: () => cy.get('#fromAccountId'),
    }

    applyNowBtn () {
        return cy.get('[value="Apply Now"]')
    }
    
}

module.exports = new loan 