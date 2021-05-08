describe('Go to login page', () => {

    it('learner login', () => {
        cy.visit('/');

        cy.get('a[href="/sign-in"]').click();

        cy.contains('Welcome Back');

        cy.get('#email')
            .type('k.yurasava+01l@severex.io');

        cy.get('#password')
            .type('QWEasd123');

        cy.get('[type="submit"]')
            .click();    

        cy.contains('k.yurasava+01l@severex.io');

    });

});