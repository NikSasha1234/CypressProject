import {mockRequests} from './mock'

context('Примеры использования различных видов проверок(asserts)', function () {

    beforeEach(function () {
        mockRequests()
        cy.intercept('GET', '**/branding', {fixture: 'autoTest/branding.json'}).as('branding')
        cy.intercept('GET', '**/room', {fixture: 'autoTest/room.json'}).as('room')
        cy.intercept('POST', '**/message', {statusCode: 201, fixture: 'autoTest/message.json'}).as('message')
cy.visit('/')

    })

    function fillForm() {
        cy.wait(['@branding', '@room'])
        cy.get('[data-testid="ContactName"]').type('Ivanov Ivan')
        cy.get('[data-testid="ContactEmail"]').type('twoI@gmail.com')
        cy.get('[data-testid="ContactPhone"]').type('47514856922')
        cy.get('[data-testid="ContactSubject"]').type('Booking room')
        cy.get('[data-testid="ContactDescription"]').type('Booking from 29.12 to 09.01')
    }


    it.only('shouldAnd', () => {
    fillForm()
     cy.contains('Submit').click()
     cy.wait('@message').should(xhr => {
                expect(xhr.response.body).have.property('name', 'Ivanov Ivan')
                            expect(xhr.request.body).have.property('email', 'twoI@gmail.com')
                            expect(xhr.request.body).have.property('phone', '47514856922')
                                        expect(xhr.request.body).have.property('subject', 'Booking room')
                                                    expect(xhr.request.body).have.property('description', 'Booking from 29.12 to 09.01')
            })
    })
})