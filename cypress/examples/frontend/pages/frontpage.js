const frontPage = {
    getLoginButton: function() {
        return cy.get('#nav-link-accountList');
    },
};

export default frontPage;