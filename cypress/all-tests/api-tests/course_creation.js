import Chance from 'chance'
describe('Create a course via API', () => {
    before(() => {
        cy.fixture('author').then(author => {
            cy.request('POST', '/api/auth/login', author).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', author.email) 
            })
        })
    });
  
    it('Positive: Course creation', () => {
        cy.fixture('course').then(course => {
            cy.request('POST', '/api/content/courses', course).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', course.name) 
            })

        })
    })

})