const loginPage = {
    getEmailField: function() {
        return cy.get('#ap_email');
    },
    getEmailConfirmBtn: function() {
        return cy.get('#continue');
    },
    getPasswordField: function() {
        return cy.get('#ap_password');
    },
    getPassConfirmBtn: function() {
        return cy.get('#signInSubmit');
    },
    logInTestAccount: function() {
        cy.fixture('userData').then((data) => {
            this.getEmailField().type(data.email);
            this.getEmailConfirmBtn().click();
            this.getPasswordField().type(data.pass);
            this.getPassConfirmBtn().click();
        });
    },

};

export default loginPage;