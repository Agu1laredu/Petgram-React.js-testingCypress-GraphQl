/* eslint-disable no-undef */

describe('Petgram', function () {
  it('para ver si la app funciona', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navegamos con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('Usuarios no registrados ven el formulario de registro al ir a favs', function () {
    cy.visit('/signin')
    cy.get('form').should('have.length', 1)
  })
})
