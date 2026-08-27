describe('Acesso', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  });

  it('Validando Acesso', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

// Exercício: .should()
  it('Preenchendo o formulário', () => {

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

      cy.get('.button')
        .should('be.visible')
        .click()

      cy.get('.success')
        .should('be.visible')
  });

// Exercício - Extra 1 e 2: Delay
  it('Validando o E-mail', () => {

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
        .type('testeteste,com')
      
      cy.get('#open-text-area')
        .should('be.visible')
        .click()
        .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula efficitur a. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur.', {delay: 0})

      cy.get('.button')
        .should('be.visible')
        .click()

      cy.get('.error')
        .should('be.visible')
        .should('contain', 'Valide os campos obrigatórios!')

  });

// Exercício - Extra 3: Validação da Propriedade do Campo de Telefone
  it('Validando o Campo de Telefone', () => {
     
    cy.get('#phone')
        .should('be.visible')
        .click()
        .type('abcde')
        .should('have.value', '')

  });

// Exercício - Extra 4: Validando a Obrigatoriedade do Campo de Telefone
  it('Validação da Obrigatóriedade do Campo de Telefone', () => {
     
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

      cy.get('#phone-checkbox')
        .should('be.visible')
        .check()
      
      cy.get('.phone-label-span')
        .contains('obrigatório')
    
      cy.get('#phone-checkbox')
        .should('be.visible')
        .uncheck()
        
      cy.get('.phone-label-span')
        .should('have.value', '')

  });
  
// Exercício - Extra 5: Clear()
  it('Limpando Campos Obrigatórios', () => {
      
    cy.get('#firstName')
        .should('be.visible')
        .click()
        .type('Pedro')
        .clear()
        .should('have.value', '')

      cy.get('#lastName')
        .should('be.visible')
        .click()
        .type('Santos')
        .clear()
        .should('have.value', '')

      cy.get('#email')
        .should('be.visible')
        .click()
        .type('teste@teste.com')
        .clear()
        .should('have.value', '')
  });

// Exercício - Extra 6: Validando Obrigatóriedade
it('Validando a Mensagem de Erro de Campos Obrigatório sem Preenchimento', () => {
    
    cy.get('.button')
        .should('be.visible')
        .click()

      cy.get('.error')
        .should('be.visible')
        .should('contain', 'Valide os campos obrigatórios!')
});

// Exercício - Extra 7: Criando um Comando Customizado
it('Validando Comando Customizado', () => {
    
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.button')
      .should('be.visible')
      .click()

    cy.get('.success')
      .should('be.visible')  
});

// Exercício - Extra 8: Utilizando o Contains()

it('Validando o Método Contains', () => {
    cy.contains('#product', 'Selecione')
      .should('be.visible')
      .select('Mentoria')
});

})