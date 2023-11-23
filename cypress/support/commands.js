// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()
    cy.get('input[id=mail]').type(email)
    cy.get('input[id=pass]').type(password)
    cy.contains('Submit').click()
})

  Cypress.Commands.add('addBooks', (book, addToFavorite) => {
    cy.contains('Add new').click()
    cy.get('input[id=title]').type(book.title)
    cy.get('input[id=description]').type(book.description)
    cy.get('input[id=fileCover]').selectFile(book.cover)
    cy.get('input[id=fileBook]').selectFile(book.bookFile)
    cy.get('input[id=authors]').type(book.authors)
    if (addToFavorite) {
        cy.get('input[id=favorite]').check()
    }
    cy.contains('Submit').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })