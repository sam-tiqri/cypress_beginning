/// <reference types="cypress" />

describe('landing page spec', () => {

    before(() => {
        cy.viewport(1200, 900);
    });

    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    });

    it('check if toolbar contains text "welcome" ', () => {
        cy.get('div.toolbar')
            .find('span')
            .contains('Welcome');
    });

    it('check if application name is displayed', () => {
        cy.get('[data-tid=span-app_name]').contains(Cypress.env('app_name') + ' app is running!');
    });

    it('check if "Learn Angular" Link redirects ', () => {
        cy.get('a.card').find('Span').contains('Learn Angular').should('be.visible').click();
        cy.on('url:changed', (ngUrl) => {
            expect(ngUrl).to.contain('https://angular.io/tutorial');
        });
    });

    it('check if "Run and Watch Tests" Button works ', () => {
        cy.get('button.card').find('Span').contains('Run and Watch Tests').should('be.visible').click();
        cy.get('div.terminal').contains('ng test');
    });

})