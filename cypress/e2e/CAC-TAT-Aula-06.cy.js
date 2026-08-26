describe('Realizando Upload de Arquivos', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });

    // Exercício 1: Validar o upload de um arquivo
    it('Validando Upload de Arquivo', () => {
        cy.get('#file-upload')
          .selectFile('cypress/fixtures/example.json')
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
          })
    });

    // Exercício Extra 1: Upload de Arquivo como Drag and Drop
    it('Upload de Arquivo como Drag and Drop', () => {
        cy.get('input[type="file"]')
          .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
          .then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
          })
    });

    // Exercício Extra 2: Upload de Arquivos com Alias
    it.only('Seleção de Arquivo com nome Alias', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('#file-upload')
          .selectFile('@sampleFile')
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
          })
    });

});