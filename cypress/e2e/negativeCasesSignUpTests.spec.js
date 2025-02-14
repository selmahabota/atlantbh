import { homePage } from "../support/pageObject/homePage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Invalid Signup tests',()=>{

    it('Invalid sign up with all fields empty', ()=>{
        homePage.signUpWithEmptyFields()
    })

    it('Invalid sign up with first name field empty', ()=>{
        homePage.signUpWithFirstNameFieldEmpty()
    })

    it('Invalid sign up with last name field empty', ()=>{
        homePage.signUpWithLastNameFieldEmpty()
    })

    it('Invalid sign up with email field empty', ()=>{
        homePage.signUpWithEmailFieldEmpty()
    })
    
    it('Invalid sign up with password field empty', ()=>{
        homePage.signUpWithPasswordFieldEmpty()
    })

    it('Invalid sign up with invalid email field', ()=>{
        homePage.signUpWithInvalidEmail()
    })

    it('Invalid sign up with to long first name field', ()=>{
        homePage.signUpWithToLongFirstName()
    })

    it('Invalid sign up with to long last name field', ()=>{
        homePage.signUpWithToLongLastName()
    })

    it('Invalid sign up with to long email field', ()=>{
        homePage.signUpWithToLongEmail()
    })

    it('Invalid sign up with to long password field', ()=>{
        homePage.signUpWithToLongPassword()
    })

    it('Invalid sign up with to short password field', ()=>{
        homePage.signUpWithToShortPassword()
    })
})