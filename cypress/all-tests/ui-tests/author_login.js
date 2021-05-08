describe('Go to login page', () => {

    it('author login', () => {
        cy.visit('/');
        //cy.visit('https://foo:bar@test.grinfer.com'); // basic auth

        /* cy.visit('https://test.grinfer.com', {
            auth: {
                username: 'foo',
                password: 'bar',
            },
        }); basic auth */ 

        cy.get('a[href="/sign-in"]').click();

        cy.contains('Welcome Back');

        cy.get('#email')
            .type('k.yurasava+mail@severex.io{\t}');

        cy.get('#password')
            .type('QWEasd123{enter}');

        cy.contains('k.yurasava+mail@severex.io');

    });




});