import { homePage } from "../support/pageObject/homePage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Cancel Sign up',()=>{

    it('Cancel Sign up user', ()=>{
        homePage.cancelSignUpUser()
    })

})