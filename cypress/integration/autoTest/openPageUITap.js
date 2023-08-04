import {mockRequests} from './mock'

context('Проверка открытия стартовой страницы и открытия страницы с DynamicID', function () {

    beforeEach(function () {
        mockRequests()
            })
// Проверка открытия стартовой страницы
    it('openStartPage', () =>{
    cy.visit('/')
    })
// Проверка редиректа на страницу с Dynamic ID
    it('redirectDynamicID', () =>{
    cy.get('a[href="/dynamicid"]').eq(0).click()
        })
// Проверка редиректа на стартовую страницу
    it('returnHomePage', () =>{
    cy.get('a[href="/home"]').eq(0).click()
        })
      })