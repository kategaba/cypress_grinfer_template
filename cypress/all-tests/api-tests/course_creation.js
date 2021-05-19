import {authorLogin} from "../../service/authService"
import {courseCreation} from "../../service/contentService"


describe('Create a course via API', () => {
    before(() => {
        authorLogin().then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('email', response.body.email) 
        })
        
    })
  
    it('Positive: Course creation', () => {
        courseCreation().then(response => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', response.body.name)
        })
    })

})