var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var ii=0; ii<3; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}


describe('registration page', () => {
    it('click on " Create account" button', () => {
        cy.visit('/');
        cy.wait(2000);
        cy.get('[class="ant-btn sc-gxMtzJ kfoDlF sc-etwtAo llemLa ant-btn-primary"]').click();
        //span[text()="Create Account"]
        cy.wait(2000);
        cy.contains('Create an Account to Get Started');

        cy.contains('Start Teaching').click();

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

        const filepath = 'images/avatar.jpg';
        cy.get('input[type="file"]').attachFile(filepath);
        //cy.get('#file-submit').click();
        //cy.get('#uploaded-files').contains('avatar.jpg');

        cy.get('#form_topics')
            .click();
        cy.contains('Beauty').click();

        cy.get('#form_subTopicIds')
            .click();
        cy.contains('Cosmetics').click({force: true});

        cy.get('#form_topics')
            .dblclick();

        cy.get('#form_title')
            .type('Beautician');

        cy.get('[class="notranslate public-DraftEditor-content"]')
            .type('Hi, I’m Madison Coates, I’m 31 years old and I am a qualified beauty therapist of over 13 years and am the founder of Madison Beauty in Berkhamsted.\nAfter developing an interest in beauty at a young age I studied Beauty Therapy and received my NVQ Level 2 & 3 at Amersham & Wycombe college in Chesham, along with various further qualifications.\nMy number one goal is for you to enjoy your experience in my salon and for you to leave feeling completely refreshed and revitalised.');
        
        cy.contains('Next').click();

        cy.get('[class="ant-switch ant-switch-checked"]')
            .click();

        cy.get('[class="ant-checkbox-input"]')
            .first().check();

        cy.contains('Complete')
            .click();

        cy.contains('Courses for sale');


    });


});