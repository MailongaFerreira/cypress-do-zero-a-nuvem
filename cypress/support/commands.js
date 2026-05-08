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
// Cypress.Commands.add('login', (email, password) => { ... })
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

// Exercicio - Extra 7: Criando um Comando Customizado
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

  const longText = Cypress._.repeat('aigasdifgsiudgfvpagpvgapigfuvgapifg', 10)

      cy.get('#firstName')
        .should('be.visible')
        .click()
        .type('Pedro')

      cy.get('#lastName')
        .should('be.visible')
        .click()
        .type('Santos')

      cy.get('#email')
        .should('be.visible')
        .click()
        .type('teste@teste.com')
    
    cy.get('#product')
        .should('be.visible')
        .select('YouTube')

      cy.get(':nth-child(3) > input')
        .should('be.visible')
        .click()

      cy.get('#email-checkbox')
        .should('be.visible')
        .check()

      cy.get('#open-text-area')
        .should('be.visible')
        .click()
        .type(longText, {delay: 0})
}) 