const productListingPage = {
    getProductItems: function() {
        return cy.get('.inventory_item');
    },
    getAddToCartBtn: function() {
        return cy.get('[data-test^="add-to-cart"]');
    },
    getCartBadge: function() {
        return cy.get('.shopping_cart_badge');
    },
};

export default productListingPage;
