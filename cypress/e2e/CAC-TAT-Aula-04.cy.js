describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });

// Exercício Extra: Marcando Flag de Feedback
    it('Marcando a Flag de Feedback', () => {
          
        cy.get('input[type="radio"]')
          .check('feedback')
          .should('be.checked')

    });

    // Exercício Extra: Marcando Flags
    it.only('Marcando a Flag de Feedback', () => {
        
        cy.get('input[type="radio"]')
          .check('ajuda')
          .should('be.checked', {delay: 10})

        cy.get('input[type="radio"]')
          .check('elogio')
          .should('be.checked', {delay: 10})    
          
        cy.get('input[type="radio"]')
          .check('feedback')
          .should('be.checked', {delay: 10})

    });
});