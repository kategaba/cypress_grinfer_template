import Chance from 'chance'
describe('User reg and become a specialist via API', () => {
    beforeEach(() => {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    cy.restoreLocalStorage();
    });
      
    afterEach(() => {
    cy.saveLocalStorage();
    });

    let testingData =[
        {
            description: "email",
            requestData: {
                email: chance.email({domain: 'gmail.com'}),
                firstName: chance.first({ gender: "female" }),
                lastName: chance.last(),
                password: "QWEasd123"     
            }
        }
    ]

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
            cy.request('POST', '/api/auth/create', requestData).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', requestData.email)                 
            })
        })

        it(`Positive: Login as ceated user ${description}`, () => {
            cy.request('POST', '/api/auth/login', requestData).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', requestData.email)                 
            })
        })

    })

});