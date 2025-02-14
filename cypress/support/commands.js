// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { homePage } from "./pageObject/homePage";
import { basePage } from "./pageObject/basePage";
import { contactListPage } from "./pageObject/contactListPage";
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('OpenPage',()=>{
    cy.visit('/')
})

Cypress.Commands.add('ValidLogin',(email, password)=>{
   basePage.fill_Input_Field(homePage.elements.homePage.email(), email)
   basePage.fill_Input_Field(homePage.elements.homePage.password(), password)
   basePage.click_on_button(homePage.elements.homePage.submit_button())
   contactListPage.elements.contactList.header_contact_list().should('contain', 'Contact List')
   cy.url().should('include', '/contactList')
})

Cypress.Commands.add('SignUp',()=>{
    const user = 
                    {
                      firstName: faker.person.firstName(),
                      lastName: faker.person.lastName(),
                      email: faker.internet.email(),
                      password: faker.internet.password()
                    }
        
    homePage.signUp(user.firstName, user.lastName, user.email, user.password)
})
