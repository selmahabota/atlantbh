import { homePage } from "./homePage"
import { basePage } from "./basePage";

export class ContactListPage{
    constructor() {}
    elements ={
    
        contactList:{
            header_contact_list:() => cy.contains('Contact List'),
            add_contact_button:() => cy.get('#add-contact'),
            logout_button:() => cy.get('#logout'),
            contact_table:() => cy.get('.contactTableBodyRow')
        },
        addContact:{
            date_of_birth:() => cy.get('#birthdate'),
            phone:() => cy.get('#phone'),
            street1:() => cy.get('#street1'),
            street2:() => cy.get('#street2'),
            city:() => cy.get('#city'),
            stateProvince:() => cy.get('#stateProvince'),
            postalCode:() => cy.get('#postalCode'),
            country:() => cy.get('#country'),
            submit_button:() => cy.get('#submit'),
            cancel_button:() => cy.get('#cancel'),
            logout_button:() => cy.get('#logout')
        }
    }

    addNewContact(){
        
        basePage.click_on_button(this.elements.contactList.add_contact_button())
        cy.fixture('addContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.lastName)
            basePage.fill_Input_Field(this.elements.addContact.date_of_birth(), contact.birth)
            basePage.fill_Input_Field(homePage.elements.homePage.email(), contact.email)
            basePage.fill_Input_Field(this.elements.addContact.phone(), contact.phone)
            basePage.fill_Input_Field(this.elements.addContact.street1(), contact.address1)
            basePage.fill_Input_Field(this.elements.addContact.street2(), contact.address2)
            basePage.fill_Input_Field(this.elements.addContact.city(), contact.city)
            basePage.fill_Input_Field(this.elements.addContact.stateProvince(), contact.stateOfProvince)
            basePage.fill_Input_Field(this.elements.addContact.postalCode(), contact.postalCode)
            basePage.fill_Input_Field(this.elements.addContact.country(), contact.country)
            
            basePage.click_on_button(homePage.elements.homePage.submit_button())

            this.elements.contactList.contact_table().should('have.length',1)
                .first()
                .within(()=>{
                    cy.get('td').eq(1).should('have.text', contact.firstName + " " + contact.lastName)
                    cy.get('td').eq(2).should('have.text', contact.birth)
                    cy.get('td').eq(3).should('have.text', contact.email)
                    cy.get('td').eq(4).should('have.text', contact.phone)
                    cy.get('td').eq(5).should('have.text', contact.address1 + " " + contact.address2)
                    cy.get('td').eq(6).should('have.text', contact.city + " " + contact.stateOfProvince + " " + contact.postalCode)
                    cy.get('td').eq(7).should('have.text', contact.country)                    
            })
        })
        
    }

    addNewContactWithEmptyMandatoryFields(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())
        basePage.click_on_button(homePage.elements.homePage.submit_button())
        homePage.elements.homePage.error_message().should('contain','Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.')
    }

    addNewContactWithOnlyMandatoryFields(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('addContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.lastName)
            basePage.click_on_button(homePage.elements.homePage.submit_button())

            this.elements.contactList.contact_table().should('have.length',1)
                .first()
                .within(()=>{
                    cy.get('td').eq(1).should('have.text', contact.firstName + " " + contact.lastName)
                })
        })

        
    }

    addNewContactWithEmptyFirstNameField(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('addContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.lastName)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
        })
        homePage.elements.homePage.error_message().should('contain','Contact validation failed: firstName: Path `firstName` is required.')

    }

    addNewContactWithEmptyLastNameField(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('addContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.firstName)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
        })
        homePage.elements.homePage.error_message().should('contain','Contact validation failed: lastName: Path `lastName` is required.')

    }

    addNewContactWithInvalidBirthDate(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.invalidBirthDate.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.invalidBirthDate.lastName)
            basePage.fill_Input_Field(this.elements.addContact.date_of_birth(), contact.invalidBirthDate.birth)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.invalidBirthDate.error)
        })
        
    }

    addNewContactWithInvalidEmail(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.invalidEmail.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.invalidEmail.lastName)
            basePage.fill_Input_Field(homePage.elements.homePage.email(), contact.invalidEmail.email)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.invalidEmail.error)
        })
    }

    addNewContactWithInvalidPhone(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.invalidPhone.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.invalidPhone.lastName)
            basePage.fill_Input_Field(this.elements.addContact.phone(), contact.invalidPhone.phone)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.invalidPhone.error)
        })
    }

    addNewContactWithToLongEmail(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongEmail.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongEmail.lastName)
            basePage.fill_Input_Field(homePage.elements.homePage.email(), contact.toLongEmail.email)
            basePage.click_on_button(homePage.elements.homePage.submit_button())            
            homePage.elements.homePage.error_message().should('contain',contact.toLongEmail.error)
        })
    }

    addNewContactWithToLongAddress1(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongAddress1.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongAddress1.lastName)
            basePage.fill_Input_Field(this.elements.addContact.street1(), contact.toLongAddress1.address1)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.toLongAddress1.error)
        })
    }

    addNewContactWithToLongAddress2(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongAddress2.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongAddress2.lastName)
            basePage.fill_Input_Field(this.elements.addContact.street2(), contact.toLongAddress2.address2)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.toLongAddress2.error)
        })
    }

    addNewContactWithToLongCity(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongCity.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongCity.lastName)
            basePage.fill_Input_Field(this.elements.addContact.city(), contact.toLongCity.city)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.toLongCity.error)
        })
    }

    addNewContactWithToLongState(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongState.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongState.lastName)
            basePage.fill_Input_Field(this.elements.addContact.stateProvince(), contact.toLongState.stateOfProvince)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.toLongState.error)
        })
    }

    addNewContactWithInvalidPostalCode(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.invalidPostalCode.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.invalidPostalCode.lastName)
            basePage.fill_Input_Field(this.elements.addContact.postalCode(), contact.invalidPostalCode.postalCode)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.invalidPostalCode.error)
        })
    }

    addNewContactWithToLongCountry(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())

        cy.fixture('invalidAddContact').then((contact) => {
            basePage.fill_Input_Field(homePage.elements.homePage.first_name(), contact.toLongCountry.firstName)
            basePage.fill_Input_Field(homePage.elements.homePage.last_name(), contact.toLongCountry.lastName)
            basePage.fill_Input_Field(this.elements.addContact.country(), contact.toLongCountry.country)
            basePage.click_on_button(homePage.elements.homePage.submit_button())
            homePage.elements.homePage.error_message().should('contain',contact.toLongCountry.error)
        })
    }

    cancelAddNewContact(){
        basePage.click_on_button(this.elements.contactList.add_contact_button())
        basePage.click_on_button(homePage.elements.homePage.cancel_button())
        this.elements.contactList.header_contact_list().should('contain','Contact List')
        this.elements.contactList.add_contact_button().should('be.visible')
    }

}
export const contactListPage = new ContactListPage()