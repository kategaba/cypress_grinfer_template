describe('Update author profile', () => {

    it('author login', () => {
        cy.visit('/sign-in');

        cy.contains('Welcome Back');

        cy.get('#email')
            .type('k.yurasava+mail@severex.io').focus(); //focus = tab key

        cy.get('#password')
            .type('QWEasd123{enter}');

        cy.contains('k.yurasava+mail@severex.io');

        cy.get('a[href="/profile/settings/account-details"]').click();

        cy.get('a[href="/profile/settings/professional-profile"]').click();

        cy.get('[data-qa-description="descriptive-specialist-title"]')
            .type(`{enter}Hi!`);

        cy.get('[data-qa-description="descriptive-specialist-contents"]')
            .type('{enter}I\'m a beautician and reflexologist.');

        const filepath = 'images/avatar.jpg';
        cy.get('[alt="preview uploaded image"]').attachFile(filepath);

        cy.get('[type="submit"]').click();

        cy.reload()

        cy.contains('Hi!');
        cy.contains('I\'m a beautician and reflexologist.');


    });






});