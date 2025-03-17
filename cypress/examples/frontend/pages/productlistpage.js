const productListPage = {
    getsearchField: function() {
        return cy.get('[name="field-keywords"]') 
    },
    getSearchtBtn: function() {
        return cy.get('#nav-search-submit-button');
    },
    getAddToCartBtn: function() {
        return cy.get('[name="submit.addToCart"]');
    },
    getCartItemNumber: function() {
        return cy.get('#nav-cart-count')
    }
};

export default productListPage;