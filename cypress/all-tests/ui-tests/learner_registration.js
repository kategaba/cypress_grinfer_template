var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var ii=0; ii<3; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}


describe('registration page', () => {
    it('open home page', () => {
        cy.visit('/');

        cy.get('h1')
            .invoke('text')
            .should('equal', 'Online Courses & 1-on-1 Consultations. Learn New Skills On Demand.');

    });

    it('click on " Create account" button', () => {
        cy.visit('/');

        cy.get('[class="ant-btn sc-gxMtzJ kfoDlF sc-etwtAo llemLa ant-btn-primary"]').click();
        //span[text()="Create Account"]

        cy.contains('Create an Account to Get Started');

        cy.get('#email')
            .type('k.yurasava+' + string + '@severex.io');

        cy.get('#firstName')    
            .type('User');
        
        cy.get('#lastName')    
            .type('Test')

        cy.get('#password')
            .type('QWEasd123');

        cy.get('[type="submit"]')
            .click();    

        cy.contains('User account successfully created.');


    });


});