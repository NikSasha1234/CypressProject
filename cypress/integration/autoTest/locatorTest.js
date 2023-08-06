context('Проверка элементов на странице', function () {

    beforeEach(function () {

    })

    // Локаторы для полей Name, Email
    it('Локаторы полей ввода', () => {
    cy.visit('/')

    cy.get('[data-testid="ContactName"]')
    cy.get('[data-testid="ContactEmail"]')

    })

    // Локаторы кнопок "Let me hack!", "Book this room" и "Submit"
    it('Локаторы кнопок', () => {
    cy.visit('/')

    cy.contains('Let me hack!')
    cy.contains('Book this room')
    cy.contains('Submit')
    })
})