import Chance from 'chance'
describe('User reg and login via API', () => {
    before(() => {
    });
  
    /*it('Positive: Create user', () => {
        cy.fixture('user').then(user => {
            cy.request('POST', '/api/auth/create', user).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('email', user.email) 
            })

        })
    })*/

    it('Negative: POST request - login non-existed user', () => {
        cy.request({
            method: 'POST', url: '/api/auth/login', failOnStatusCode: false, body:
            {
                "email": "test",
                "password": "123456",
                "rememberMe": true
            }
        }).then(response => {
            expect(response.status).to.eq(401)
        })

    })

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
    })
});