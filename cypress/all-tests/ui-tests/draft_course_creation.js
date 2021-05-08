describe('Courses for sale', () => {

    it('Draft course creation with lessons', () => {
        cy.visit('/sign-in');

        cy.contains('Welcome Back');

        cy.get('#email')
            .type('k.yurasava+mail@severex.io').focus(); //focus = tab key

        cy.get('#password')
            .type('QWEasd123{enter}');

        cy.contains('k.yurasava+mail@severex.io');

        cy.contains('Create a new course').should('be.visible').click(); //selector = text

        cy.get('[data-qa-description="source-topic-select-input"]').click();
        cy.contains('Beauty').click();

        cy.get('[data-qa-description="source-topic-sub-select-input"]').click();
        cy.contains('Cosmetics').click();

        cy.get('[data-qa-description="course-cover-file-upload-button"]').click();
        const filepath = 'images/cover.jpg';
        cy.get('input[type="file"]').attachFile(filepath);
        cy.contains('cover.jpg').click();

        cy.get('[data-qa-description="descriptive-course-title"]')
            .should('be.visible')
            .type('Facial Course');

        cy.get('[data-qa-description="descriptive-course-description"]')
            .type('In this course you will learn how to do everything from the basic techniques right through to the most professional facial treatment…. Your imagination is the limit once you have mastered the basic techniques.');

        cy.get('[data-qa-description="course-media-file-upload-button"]').click();
        const videopath = 'video/welcome.mp4';
        cy.get('input[type="file"]').attachFile(videopath);
        cy.wait(2000);
        cy.contains('welcome.mp4').should('be.visible').click();

        cy.get('[data-qa-description="undefinedundefinedprice-tier-select-input"]').click();
        cy.contains('Tier 1').click({force: true});

        cy.contains('Next, create lesson').click();

    });


});