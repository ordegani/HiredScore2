/// <reference types="cypress" />

context('Navigation', () => {
    it('can navigate around the website', () => {
        cy.visit('https://www.hiredscore.com');
        cy.get('.w-dropdown').last().trigger('mouseover')
        cy.get('a[href*="/careers"]').first().click({ multiple: true })
        cy.url('https://www.hiredscore.com/careers#career-listing')
        cy.get('.job-grid-title').first().click({force: true})
        cy.get('a[href*="/careers"]').last().click({ multiple: true })
        cy.get('.w-dropdown').eq(2).trigger('mouseover')
        cy.get('a[href*="/press"]').first().click({ multiple: true })
        cy.url('https://www.hiredscore.com/press')

    });
});
       
//   NOTES wrong pattern: cy.get('.dropdown-link no-icon w-dropdown-link').should('have.text', 'Careers').click()  
