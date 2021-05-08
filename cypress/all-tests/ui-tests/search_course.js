describe('Test for grinfer', () => {
    it('Positive: Search a course', () => {

        cy.visit('/')
        cy.get('.ant-input-suffix').click()
        cy.wait(3000)
        cy.get('.ant-input').type('Facial Course{enter}')
        cy.wait(3000)
        cy.get(`a[href="/course/facial-course-kylie-hensley"]`).should('exist')
        //cy.get('[data-qa-description="Facial Course"]').should('exist')
    })


})
