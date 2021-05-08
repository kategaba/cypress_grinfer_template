import Chance from 'chance'
let email = chance.email({domain: 'gmail.com'});

describe('Registration page', () => {
    it('Consultant registration', () => {
        cy.visit('/');
        cy.wait(2000);
        cy.get('[class ="ant-btn sc-gxMtzJ kfoDlF sc-etwtAo llemLa ant-btn-primary"]').click();
        cy.wait(2000);
        cy.contains('Create an Account to Get Started');

        cy.contains('Start Teaching').click();

        cy.get('#email')
            .type(`${email}`);

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
            .type('Hi, I’m Madison Coates, I’m 31 years old and I am a qualified beauty therapist of over 13 years and am the founder of Madison Beauty in Berkhamsted.');
        
        cy.contains('Next').click();

        cy.get('[data-qa-description="undefinedundefinedprice-tier-select-input"]')
            .click();
        cy.contains('Tier 1').click({force: true});

        cy.get('#form_timezone')
            .click();
        cy.contains('UTC+03 (Europe/Minsk)').click({force: true});


        cy.get('[class="ant-checkbox-input"]')
            .first().check();

        cy.contains('Complete')
            .click();

        cy.contains('Courses for sale');


    });


});