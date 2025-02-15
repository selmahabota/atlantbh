import { contactListPage } from "../../support/pageObject/contactListPage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Add new contact',()=>{

    it('Add new contact happy path', ()=>{
        const phone = '12234567'
        cy.SignUp()
        contactListPage.addNewContactForEdit()
        contactListPage.editContact(phone)
    })

})