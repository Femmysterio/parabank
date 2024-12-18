/// <reference types="cypress" />

class login {

    element = {
        loginUsernameField: () => cy.get('[name="username"]'), 
        loginPasswordField: () => cy.get('[type="password"]'),
        loginBtn: () => cy.get('[value="Log In"]'),
        assertLoginPage: (value) => cy.get('#showOverview > .title').should('contain.text', value)
    }

    logout () {
        return cy.get('[href*="logout.h"]')
    }
    
}

module.exports = new login