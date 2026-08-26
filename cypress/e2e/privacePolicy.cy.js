it('Validando a Página de Politica de Privacidade de Forma Independente', () => {
    cy.visit('./src/privacy.html');
    cy.contains('h1', 'CAC TAT - Política de Privacidade')
        .should('be.visible');
});