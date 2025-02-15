import { contactListPage } from "../../support/pageObject/contactListPage";

beforeEach(()=>{
    cy.OpenPage()
})

describe('Negative cases for Add new contact',()=>{

    it('Add new contact with empty mandatory fields', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithEmptyMandatoryFields()
    })

    it('Add new contact with first name field empty', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithEmptyFirstNameField()
    })

    it('Add new contact with last name field empty', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithEmptyLastNameField()
    })

    it('Add new contact with invalid birth date', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithInvalidBirthDate()
    })

    it('Add new contact with invalid email', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithInvalidEmail()
    })

    it('Add new contact with invalid phone', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithInvalidPhone()
    })

    it('Add new contact with too long email', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongEmail()
    })

    it('Add new contact with too long address1', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongAddress1()
    })

    it('Add new contact with too long address2', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongAddress2()
    })

    it('Add new contact with  too long city', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongCity()
    })

    it('Add new contact with invalid phone', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithInvalidPhone()
    })

    it('Add new contact with too long state', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongState()
    })

    it('Add new contact with invalid postal code', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithInvalidPostalCode()
    })

    it('Add new contact with too long country name', ()=>{
        cy.SignUp()
        contactListPage.addNewContactWithToLongCountry()
    })
})