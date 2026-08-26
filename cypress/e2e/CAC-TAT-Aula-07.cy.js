describe('Acessando links que abrem novas abas', () => {
    beforeEach(() => {
        cy.visit('./src/index.html');
    });

//  Exercício 1: Validando a Existência de Uma nova aba
    it('Validanado a existência do elemento target', () => {
        cy.get('a[target="_blank"]')
          .should('exist');
    });


    // Exercício - Extra 1: Acessando a nova aba na página atual. 
    it('Removendo o elemento target e acessando a página', () => {
        cy.get('a[target="_blank"]')
            .should('exist');
        cy.get('a[target="_blank"]')
            .invoke('removeAttr', 'target');
        cy.contains('a', 'Política de Privacidade')
            .click();
        cy.contains('h1', 'CAC TAT - Política de Privacidade')
            .should('be.visible');
    });

});