import { homePage } from "../../support/pageObject/homePage";
const { faker } = require('@faker-js/faker');

beforeEach(()=>{
    cy.OpenPage()
})

describe('Sign up, login and logout',()=>{

    it('Sign up user', ()=>{
        const user = 
            {
              firstName: faker.person.firstName(),
              lastName: faker.person.lastName(),
              email: faker.internet.email(),
              password: faker.internet.password()
            }

        Cypress.env('user', user)

        homePage.signUp(user.firstName, user.lastName, user.email, user.password)

    })

    it('Login user',()=>{
        const user = Cypress.env('user')
        cy.ValidLogin(user.email, user.password)
    })

    it('Logout user',()=>{
        const user = Cypress.env('user')
        cy.ValidLogin(user.email, user.password)
        homePage.logOutUser()
        
    })

})