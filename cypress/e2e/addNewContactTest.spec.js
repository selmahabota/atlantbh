import { contactListPage } from "../support/pageObject/contactListPage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Add new contact',()=>{

    it('Add new contact happy path', ()=>{
        cy.SignUp()
        contactListPage.addNewContact()
    })

})