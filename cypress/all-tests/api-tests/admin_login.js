describe('Admin', () => {  
    it('Positive: Admin login', () => {
        cy.fixture('admin').then(admin => {
            cy.request('POST', '/api/auth/login', admin).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', admin.email) 
            })

        })
    })

})