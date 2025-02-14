describe('Api tests',()=>{

    it('Add and Get User, Add and Get Contact', ()=>{
        const userCredentials = {
            "firstName": "Test",
            "lastName": "User",
            "email": "testaddress@email.com",
            "password": "myPassword"
        }
        Cypress.env('emailLogin', userCredentials.email)
        Cypress.env('passwordLogin', userCredentials.password)

        cy.request('POST', Cypress.env('apiUrl')+'users', userCredentials)
        .its('body').then(body=>{
            const token = body.token
            Cypress.env('authToken', token)
            expect(body.user.firstName).to.eq(userCredentials.firstName)
            expect(body.user.lastName).to.eq(userCredentials.lastName)
            expect(body.user.email).to.eq(userCredentials.email)
            cy.request({
                url: Cypress.env('apiUrl') + 'users/me',
                headers: { 'Authorization': 'Bearer '+token},
                method: 'GET',
            }).its('body').then(body=>{
                expect(body.firstName).to.be.eq(userCredentials.firstName)
                expect(body.lastName).to.be.eq(userCredentials.lastName)
                expect(body.email).to.be.eq(userCredentials.email)
            })
            cy.fixture('bodyAddContact',).then((bodyAddContact) => {
                cy.request({
                    url: Cypress.env('apiUrl') + 'contacts',
                    headers: { 'Authorization': 'Bearer '+token},
                    method: 'POST',
                    body: bodyAddContact
                }).then(response =>{
                    expect(response.status).to.eq(201)
                    expect(response.body.firstName).to.eq(bodyAddContact.firstName)
                    expect(response.body.lastName).to.eq(bodyAddContact.lastName)
                    expect(response.body.birthdate).to.eq(bodyAddContact.birthdate)
                    expect(response.body.email).to.eq(bodyAddContact.email)
                    expect(response.body.phone).to.eq(bodyAddContact.phone)
                    expect(response.body.street1).to.eq(bodyAddContact.street1)
                    expect(response.body.street2).to.eq(bodyAddContact.street2)
                    expect(response.body.city).to.eq(bodyAddContact.city)
                    expect(response.body.stateProvince).to.eq(bodyAddContact.stateProvince)
                    expect(response.body.postalCode).to.eq(bodyAddContact.postalCode)
                    expect(response.body.country).to.eq(bodyAddContact.country)
                })

                cy.request({
                    url: Cypress.env('apiUrl') + 'contacts',
                    headers: { 'Authorization': 'Bearer '+token},
                    method: 'GET',
                }).then(response =>{
                    expect(response.status).to.eq(200)
                    expect(response.body[0].firstName).to.eq(bodyAddContact.firstName)
                    expect(response.body[0].lastName).to.eq(bodyAddContact.lastName)
                    expect(response.body[0].birthdate).to.eq(bodyAddContact.birthdate)
                    expect(response.body[0].email).to.eq(bodyAddContact.email)
                    expect(response.body[0].phone).to.eq(bodyAddContact.phone)
                    expect(response.body[0].street1).to.eq(bodyAddContact.street1)
                    expect(response.body[0].street2).to.eq(bodyAddContact.street2)
                    expect(response.body[0].city).to.eq(bodyAddContact.city)
                    expect(response.body[0].stateProvince).to.eq(bodyAddContact.stateProvince)
                    expect(response.body[0].postalCode).to.eq(bodyAddContact.postalCode)
                    expect(response.body[0].country).to.eq(bodyAddContact.country)
                })
            })
        })
    })

    it('Get, Update and Delete contact',()=>{
        cy.fixture('bodyAddContact').then((bodyAddContact) => {
            cy.fixture('updatedContact').then((UpdatedContact) => {
                const token = Cypress.env('authToken')
                cy.request({
                    url: Cypress.env('apiUrl') + 'contacts/',
                    headers: { 'Authorization': 'Bearer '+token},
                    method: 'GET',
                }).then(response =>{
                    expect(response.status).to.eq(200)
                    expect(response.body[0].firstName).to.eq(bodyAddContact.firstName)
                    expect(response.body[0].lastName).to.eq(bodyAddContact.lastName)
                    expect(response.body[0].birthdate).to.eq(bodyAddContact.birthdate)
                    expect(response.body[0].email).to.eq(bodyAddContact.email)
                    expect(response.body[0].phone).to.eq(bodyAddContact.phone)
                    expect(response.body[0].street1).to.eq(bodyAddContact.street1)
                    expect(response.body[0].street2).to.eq(bodyAddContact.street2)
                    expect(response.body[0].city).to.eq(bodyAddContact.city)
                    expect(response.body[0].stateProvince).to.eq(bodyAddContact.stateProvince)
                    expect(response.body[0].postalCode).to.eq(bodyAddContact.postalCode)
                    expect(response.body[0].country).to.eq(bodyAddContact.country)
                    const contactId = response.body[0]._id

                    cy.request({
                        url: Cypress.env('apiUrl') + `contacts/${contactId}`,
                        headers: { 'Authorization': 'Bearer '+token},
                        method: 'PUT',
                        body: UpdatedContact
                    }).then(response =>{
                        expect(response.status).to.eq(200)
                        expect(response.body.firstName).to.eq(UpdatedContact.firstName)
                        expect(response.body.lastName).to.eq(UpdatedContact.lastName)
                        expect(response.body.birthdate).to.eq(UpdatedContact.birthdate)
                        expect(response.body.email).to.eq(UpdatedContact.email)
                        expect(response.body.phone).to.eq(UpdatedContact.phone)
                        expect(response.body.street1).to.eq(UpdatedContact.street1)
                        expect(response.body.street2).to.eq(UpdatedContact.street2)
                        expect(response.body.city).to.eq(UpdatedContact.city)
                        expect(response.body.stateProvince).to.eq(UpdatedContact.stateProvince)
                        expect(response.body.postalCode).to.eq(UpdatedContact.postalCode)
                        expect(response.body.country).to.eq(UpdatedContact.country)
                    })

                    const firstNameBody= {
                        "firstName": "Anna"
                    }
        
                    cy.request({
                        url: Cypress.env('apiUrl') + `contacts/${contactId}`,
                        headers: { 'Authorization': 'Bearer '+token},
                        method: 'PATCH',
                        body: firstNameBody
                    }).then(response =>{
                        expect(response.status).to.eq(200)
                        expect(response.body.firstName).to.eq(firstNameBody.firstName)
        
                    })
                    cy.request({
                        url: Cypress.env('apiUrl') + `contacts/${contactId}`,
                        headers: { 'Authorization': 'Bearer '+token},
                        method: 'DELETE'
                    }).then(response =>{
                        expect(response.status).to.eq(200)
                    })
                })
            })

        })
    })
  
    it('Update User',()=>{
        cy.fixture('updatedUser').then((UpdatedUser) => {
            const token = Cypress.env('authToken')
            cy.request({
                url: Cypress.env('apiUrl') + 'users/me',
                headers: { 'Authorization': 'Bearer '+token},
                method: 'PATCH',
                body: UpdatedUser
            }).its('body').then(body=>{
                expect(body.firstName).to.be.eq(UpdatedUser.firstName)
                expect(body.lastName).to.be.eq(UpdatedUser.lastName)
                expect(body.email).to.be.eq(UpdatedUser.email)
            })
        })
    })

    it('Logout User',()=>{
        const token = Cypress.env('authToken')
        cy.request({
            url: Cypress.env('apiUrl') + 'users/logout',
            headers: { 'Authorization': 'Bearer '+token},
            method: 'POST'
        }).then(response =>{
            expect(response.status).to.eq(200)
        })
        
    })

    it('Login User',()=>{
        cy.fixture('updatedUser').then((UpdatedUser) => {
            const User = {
                "email": UpdatedUser.email,
                "password": UpdatedUser.password
            }
            const token = Cypress.env('nauthToken')
            cy.request({
                url: Cypress.env('apiUrl') + 'users/login',
                headers: { 'Authorization': 'Bearer '+token},
                method: 'POST',
                body: User
            }).then(response =>{
                expect(response.status).to.eq(200)
                expect(response.body.user.email).to.eq(User.email)
                const newToken = response.body.token
                Cypress.env('newAuthToken', newToken)
            })
            
        })

        
    })

    it('Delete User',()=>{

        const token = Cypress.env('newAuthToken')
        cy.request({
            url: Cypress.env('apiUrl') + 'users/me',
            headers: { 'Authorization': 'Bearer '+token},
            method: 'DELETE'
        }).then(response =>{
            expect(response.status).to.eq(200)
        
        })
    })  

})
    