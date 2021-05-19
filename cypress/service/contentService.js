export const courseCreation = (body, autoControl = true) => {
    return cy.fixture('course').then(course => {
            cy.request('POST', '/api/content/courses', course)
    })
}