describe('Desafio Final', () => {

    beforeEach(() => {
        cy.visit('./src/index.html')
    });

    it('Encontrando o gato' , () => {

        cy.get('#cat')
            .invoke('show')
            .should('be.visible')
            
    })
    
});