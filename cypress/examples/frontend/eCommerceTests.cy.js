import frontPage from './pages/frontpage';
import loginPage from './pages/loginpage';
import productListPage from './pages/productlistpage';

describe('Navigate through the User flow on Amazon.com', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');
    });
    it('Access login area from the front page', () => {
      frontPage.getLoginButton().click()
      cy.url().should('include', 'signin');
    });
    it('Log into test account', () => {
      frontPage.getLoginButton().click();
      cy.url().should('include', 'signin');
      loginPage.logInTestAccount();
    });
    it('Add an item to the Cart', () => {
      productListPage.getsearchField().type('Paper clip')
      productListPage.getSearchtBtn().click()
      productListPage.getAddToCartBtn().first().click();
      productListPage.getCartItemNumber().should('not.have.text', '0');
    });
  });