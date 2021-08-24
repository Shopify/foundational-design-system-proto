describe('Website', () => {
  it('opens the main website url', () => {
    cy.visit('/');
    expect(true).to.equal(true);

    cy.percySnapshot();
  });
});
