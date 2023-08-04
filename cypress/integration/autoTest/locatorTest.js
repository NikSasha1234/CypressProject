import {mockRequests} from './mock'

context('Проверка элементов на странице', function () {

    beforeEach(function () {
        mockRequests()
        cy.intercept('GET', '**/branding', {fixture: 'autoTest/branding.json'}).as('branding')
        cy.intercept('GET', '**/room', {fixture: 'autoTest/room.json'}).as('room')
        cy.intercept('POST', '**/message', {statusCode: 201, fixture: 'autoTest/message.json'}).as('message')

    })

    //Начнем с простого способа определения локатора, показать мишень, копирование локаторов
    it('getLocatorMessageForm', () => {
    cy.visit('/')
        //определить вместе локаторы для полей Email, Phone, Subject, Message
    cy.get('[data-testid="ContactName"]')
    cy.get('[data-testid="ContactEmail"]')
        //определить локатор кнопки Submit

    })

    //Найти локаторы кнопок "Book this room" и "Submit"
    it('getLocatorButton', () => {
    cy.visit('/')
    cy.get('button[type = "button"]').eq(1)
    cy.get('button[type = "button"]').eq(2)
    })
})