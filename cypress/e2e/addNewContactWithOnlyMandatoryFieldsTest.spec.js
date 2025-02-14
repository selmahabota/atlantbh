import { contactListPage } from "../support/pageObject/contactListPage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Add new contact with only mandatory fields',()=>{

    it('Add new contact with only mandatory fields', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithOnlyMandatoryFields()
    })

})