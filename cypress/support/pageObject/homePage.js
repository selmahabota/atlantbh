import { base } from "@faker-js/faker"
import { basePage } from "./basePage"

export class HomePage{
    constructor() {}
    elements ={
        homePage:{
            email:() => cy.get('#email'),
            password:() => cy.get('#password'),
            first_name:() => cy.get('#firstName'),
            last_name:() => cy.get('#lastName'),
            submit_button:() => cy.get('#submit'),
            sign_up_button:() => cy.get('#signup'),
            header_contact_list_app:() => cy.contains('Contact List App'),
            error_message:() => cy.get('#error'),
            cancel_button:() => cy.get('#cancel'),
        },

        contactList:{
            header_contact_list:() => cy.contains('Contact List'),
            add_contact_button:() => cy.get('#add-contact'),
            logout_button:() => cy.get('#logout')
        },
        addContact:{
            first_name:() => cy.get('#firstName'),
            last_name:() => cy.get('#lastName'),
            date_of_birth:() => cy.get('#birthdate'),
            email:() => cy.get('#email'),
            phone:() => cy.get('#phone'),
            street1:() => cy.get('#street1'),
            street2:() => cy.get('#street2'),
            city:() => cy.get('#city'),
            stateProvince:() => cy.get('#stateProvince'),
            postalCode:() => cy.get('#postalCode'),
            country:() => cy.get('#country'),
            submit_button:() => cy.get('#submit'),
            cancel_button:() => cy.get('#cancel'),
            logout_button:() => cy.get('#logout'),
            contact_table:() => cy.get('.contactTableBodyRow').find('td')
        }
    }

    signUp(firstName, lastName, email, password){
        
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        basePage.fill_Input_Field(this.elements.homePage.first_name(), firstName)
        basePage.fill_Input_Field(this.elements.homePage.last_name(), lastName)
        basePage.fill_Input_Field(this.elements.homePage.email(), email)
        basePage.fill_Input_Field(this.elements.homePage.password(),password)
        basePage.click_on_button(this.elements.homePage.submit_button())

        this.elements.contactList.header_contact_list().should('contain', 'Contact List')
    }

 
    loginWithAllEmptyFields(){
        basePage.click_on_button(this.elements.homePage.submit_button())
        cy.fixture('invalidUser').then((users) => {
            this.elements.homePage.error_message().should('contain', users.allEmptyFields.error)
        })
    }

    loginWithEmptyEmail(){
        cy.fixture('invalidUser').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.password(), users.emailEmpty.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.emailEmpty.error)
        })
    }

    loginWithEmptyPassword(){
        cy.fixture('invalidUser').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.email(), users.passwordEmpty.email)
            this.elements.homePage.password().clear()
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.passwordEmpty.error)
        })
    }

    loginWithInvalidEmail(){
        cy.fixture('invalidUser').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.email(), users.invalidEmail.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.invalidEmail.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.passwordEmpty.error)
        })
    }

    signUpWithEmptyFields(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        basePage.click_on_button(this.elements.homePage.submit_button())
        cy.fixture('invalidSignUp').then((users) => {
            this.elements.homePage.error_message().should('contain', users.allEmptyFields.error)
        })
    }

    signUpWithFirstNameFieldEmpty(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.firstNameEmpty.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.firstNameEmpty.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.firstNameEmpty.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.firstNameEmpty.error)
        })
    }
    signUpWithLastNameFieldEmpty(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.lastNameEmpty.firstName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.lastNameEmpty.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.lastNameEmpty.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.lastNameEmpty.error)
        })
    }

    signUpWithEmailFieldEmpty(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.emailEmpty.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.emailEmpty.lastName)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.emailEmpty.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.emailEmpty.error)
        })
    }

    signUpWithPasswordFieldEmpty(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.passwordEmpty.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.passwordEmpty.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.passwordEmpty.email)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.passwordEmpty.error)
        })
    }

    signUpWithInvalidEmail(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.invalidEmail.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.invalidEmail.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.invalidEmail.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.invalidEmail.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.invalidEmail.error)
        })
    }

    signUpWithTooLongFirstName(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.firstNameIsTOLong.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.firstNameIsTOLong.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.firstNameIsTOLong.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.firstNameIsTOLong.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.firstNameIsTOLong.error)
        })
    }

    signUpWithTooLongLastName(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.LastNameIsTOLong.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.LastNameIsTOLong.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.LastNameIsTOLong.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.LastNameIsTOLong.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.LastNameIsTOLong.error)
        })
    }

    signUpWithTooLongEmail(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.emailIsToLong.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.emailIsToLong.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.emailIsToLong.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.emailIsToLong.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.emailIsToLong.error)
        })
    }
    
    signUpWithTooShortPassword(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.paswordIsToShort.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.paswordIsToShort.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.paswordIsToShort.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.paswordIsToShort.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.paswordIsToShort.error)
        })
    }

    signUpWithTooLongPassword(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        cy.fixture('invalidSignUp').then((users) => {
            basePage.fill_Input_Field(this.elements.homePage.first_name(), users.passwordIsToLong.firstName)
            basePage.fill_Input_Field(this.elements.homePage.last_name(), users.passwordIsToLong.lastName)
            basePage.fill_Input_Field(this.elements.homePage.email(), users.passwordIsToLong.email)
            basePage.fill_Input_Field(this.elements.homePage.password(), users.passwordIsToLong.password)
            basePage.click_on_button(this.elements.homePage.submit_button())
            this.elements.homePage.error_message().should('contain', users.passwordIsToLong.error)
        })
    }

    cancelSignUpUser(){
        basePage.click_on_button(this.elements.homePage.sign_up_button())
        basePage.click_on_button(this.elements.homePage.cancel_button())
        this.elements.homePage.header_contact_list_app().should('contain','Contact List App')
        this.elements.homePage.sign_up_button().should('be.visible')
    }

    logOutUser(){
        this.elements.contactList.logout_button().should('be.visible')
            .click()
        this.elements.homePage.header_contact_list_app().should('contain', 'Contact List App')
    }
}
export const homePage = new HomePage()