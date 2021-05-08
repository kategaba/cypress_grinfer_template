describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('/');

        cy.get('h1')
            .invoke('text')
            .should('equal', 'Online Courses & 1-on-1 Consultations. Learn New Skills On Demand.');

    });

    it('click on "Log In" button', () => {
        cy.visit('/');

        cy.get('a[href="/sign-in"]').click();

        cy.contains('Welcome Back');


    });




});