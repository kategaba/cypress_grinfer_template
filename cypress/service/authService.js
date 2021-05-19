export const authorLogin = (body, autoControl = true) => {
    return cy.fixture('author').then(author => {
                cy.request('POST', '/api/auth/login', author)
    })
}
