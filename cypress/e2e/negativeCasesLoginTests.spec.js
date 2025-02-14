import { homePage } from "../support/pageObject/homePage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Invalid Login tests',()=>{

    it('Invalid login with all fields empty', ()=>{
        homePage.loginWithAllEmptyFields()
    })

    it('Invalid login with email field empty', ()=>{
        homePage.loginWithEmptyEmail()
    })

    it('Invalid login with password field empty', ()=>{
        homePage.loginWithEmptyPassword()
    })
    
    it('Invalid login with invalid email', ()=>{
        homePage.loginWithInvalidEmail()
    })
    
})