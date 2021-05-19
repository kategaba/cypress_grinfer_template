describe('Author', () => {
    it('Positive: Author login', () => {
        cy.fixture('author').then(author => {
            cy.request('POST', '/api/auth/login', author).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', author.email) 
            })

        })
    })

})