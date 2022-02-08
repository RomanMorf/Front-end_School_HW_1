describe('Test NotFound page', () => {

  it('Visits Home url', () => {
    cy.visit('/', {duration: 3000})

    cy.scrollTo(0, 500, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)

    cy.scrollTo(0, 0, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)
  });

  it('Visits NotFound (undefined) url', () => {
    cy.visit('/blabla/page')

    cy.wait(5000)
  });

  it('go back to the Home url', () => {
    cy.visit('/', {duration: 3000})

    cy.scrollTo(0, 500, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)

    cy.scrollTo(0, 0, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)
  });
});
