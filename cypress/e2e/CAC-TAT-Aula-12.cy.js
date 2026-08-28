describe('Validando Tempo de Mensagem', () => {

    beforeEach(() => {
        cy.visit('./src/index.html')
    });

    // Exercício 1 - Aula sobre o tempo de exibição da mensagem de erro - CY.CLOCK()/CY.TICK()

    it('Validando Exibição de Mensagem de Erro por 3s', () => {
        cy.clock()

        cy.get('.button')
            .should('be.visible')
            .click()

        cy.get('.error')
            .should('be.visible')
            .should('contain', 'Valide os campos obrigatórios!')
        
        cy.tick(3000)

        cy.get('.error')
            .should('not.be.visible')
    });

    it('Validando a mensagem de E-mail', () => {
      cy.clock()

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
    
      cy.tick(3000)

      cy.get('.error')
            .should('not.be.visible')

  });


  // Exercício 1 (Continuação) - Aula sore a Função Lodash em Cypress - cypress._.(Nome da Função)()

  it('Validando a Função Lodash', () => {

    const text = Cypress._.times(3, () => 'Lorem ipsum dolor sit amet')

        cy.get('#open-text-area')
            .should('be.visible')
            .click()
            .invoke('val', text)
        
  })

  // Exercício 2 - Aula sore a Função Invoke em Cypress

  it('Validando a Função Invoke', () => {

        cy.get('button')
            .should('be.visible')
            .invoke('hide')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .click()
        
        cy.get('.error')
            .invoke('show')
            .should('be.visible')
            .and('contain', 'Valide os campos obrigatórios!')
            .invoke('hide')
            .should('not.be.visible')

  })

// Exercício 3 - Aula sore a Função Invoke em Cypress para Preencher um Campo de Texto

 it('Validando a Função Invoke para Texto', () => {

        cy.get('#open-text-area')
            .should('be.visible')
            .click()
            .invoke('val', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula efficitur a. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur.')
            .should('have.value', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula efficitur a. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur. Donec eget nunc ac nisl efficitur convallis. Donec in odio a enim efficitur efficitur.')
        
  })

  // Exercício 4 - Aula sore a Função Request em Cypress para Testes de API
    it.only('Validando a Função Request para Testes de API', () => {

        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should((response) => {
                const { status, statusText, body } = response
                expect(status).to.eq(200)
                expect(statusText).to.eq('OK')
                expect(body).to.include('CAC TAT')
            })

        })

});