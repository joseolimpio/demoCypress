const loginPage = {
    getUsernameField: function() {
        return cy.get('[data-test="username"]');
    },
    getPasswordField: function() {
        return cy.get('[data-test="password"]');
    },
    getLoginButton: function() {
        return cy.get('[data-test="login-button"]');
    },
    login: function() {
        cy.fixture('userData').then((data) => {
            this.getUsernameField().type(data.username);
            this.getPasswordField().type(data.password);
            this.getLoginButton().click();
        });
    },
};

export default loginPage;
