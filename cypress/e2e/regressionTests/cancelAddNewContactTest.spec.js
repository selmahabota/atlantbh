import { contactListPage } from "../../support/pageObject/contactListPage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Cancel Add new contact',()=>{

    it('Cancel Add new contact', ()=>{
        cy.SignUp()
        contactListPage.cancelAddNewContact()
    })

})