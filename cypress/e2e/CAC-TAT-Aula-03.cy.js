describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  });

// Exercício 1: Selecionar Item utilizando Cy.select()
  it('Selecionando item de uma lista', () => {
      cy.get('select')
        .select('YouTube')
        .should('have.value', 'youtube')
  });

// Exercício 2: Selecionando Pelo Indice
  it.only('Selecionando via Indice', () => {
      cy.get('select')
        .select(1)
        .should('have.value', 'blog')
  });

//

})