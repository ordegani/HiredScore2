/// <reference types="cypress" />

context('Navigation', () => {
    it('can navigate around the website', () => {
        cy.visit('https://www.hiredscore.com');
        cy.get('.w-dropdown').last().trigger('mouseover')
        //   cy.get('.dropdown-link no-icon w-dropdown-link').should('have.text', 'Careers').click()  
        cy.get('a[href*="/careers"]').first().click({ multiple: true })
    });
});
