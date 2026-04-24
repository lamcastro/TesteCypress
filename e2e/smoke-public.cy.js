describe('Smoke public', () => {
  it('opens a public page', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink').should('be.visible');
  });
}); 