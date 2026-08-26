describe('Aula 05 - Marcando (e desmarcando) inputs do tipo checkbox', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    }); 
    
    it.only('Validando Marcação de Checkbox', () => {
        cy.get('input[type="checkbox"]')
          .each(($checkbox) => {
            cy.wrap($checkbox)
              .check()
              .should('be.checked')
          })
          .last()
          .uncheck()
          .should('not.be.checked')
    });

    it.only('Utilizando Check() na Marcação da Flag de Telefone', () => {
     
       cy.fillMandatoryFieldsAndSubmit()

       cy.get('#phone-checkbox')
         .should('be.visible')
         .check()
         .should('be.checked')
        
        cy.get('button')
          .click()
        
        cy.get('.error')
          .should('be.visible')
          .should('contain', 'Valide os campos obrigatórios!')
    });
});
