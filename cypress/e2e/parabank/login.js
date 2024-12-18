/// <reference types="cypress" />

import login from '../../support/parabank_pom/login_pom' 

describe('Validate Login Functionality', () => {

    const username = 'olajidey03'
    const password = 'Femmy@2000'

    //i had to include the action triggers(i.e click, select, type) here instead of POM file for clarity
    it('Verify User can login with valid credentials', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();
        login.element.assertLoginPage('Accounts Overview');

    });

    it('Verify User can logout Successfully', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();

        cy.wait(2000);
        login.logout().click({force:true})
    });

    it('Verify User cannot login leaving Username and password field empty', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type();
        login.element.loginPasswordField().type();
        login.element.loginBtn().click();
        
    });

    it('Verify User cannot login leaving Username field empty', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type();
        login.element.loginPasswordField().type(password);
        login.element.loginBtn().click();
        
    });

    it('Verify User cannot login leaving Password field empty', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        login.element.loginUsernameField().type(username);
        login.element.loginPasswordField().type();
        login.element.loginBtn().click();
        
    });
})