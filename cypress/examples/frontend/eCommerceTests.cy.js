import frontPage from './pages/frontpage';
import loginPage from './pages/loginpage';
import productlistpage from './pages/productlistpage';

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
      productlistpage.getsearchField().type('Paper clip')
      productlistpage.getSearchtBtn().click()
      productlistpage.getAddToCartBtn().first().click();
      productlistpage.getCartItemNumber().should('not.have.text', '0');
    });
  });