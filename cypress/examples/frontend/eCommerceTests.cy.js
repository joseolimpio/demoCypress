import loginPage from './pages/loginpage';
import productListingPage from './pages/productlistingpage';

describe('Navigate through the User flow on Saucedemo', () => {
    context('Login page', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Shows the login form on the front page', () => {
            loginPage.getUsernameField().should('be.visible');
            loginPage.getPasswordField().should('be.visible');
            loginPage.getLoginButton().should('be.visible');
        });

        it('Logs into a test account', () => {
            loginPage.login();
            cy.url().should('include', '/inventory.html');
        });
    });

    context('Inventory page', () => {
        beforeEach(() => {
            cy.visit('/');
            loginPage.login();
        });

        it('Adds an item to the cart', () => {
            productListingPage.getAddToCartBtn().first().click();
            productListingPage.getCartBadge().should('have.text', '1');
        });
    });
});
