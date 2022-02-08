describe('Test Profile page', () => {

  it('Visits profile url', () => {
    cy.visit('/profile/kikakiim', {duration: 3000})

    cy.scrollTo(0, 500, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)

    cy.scrollTo(0, 500, {duration: 3000, scrollBehavior: true})
    cy.wait(1000)

    cy.scrollTo(0, 50, {duration: 3000, scrollBehavior: true})

    cy.get('.slot_wrapper')
      .eq(1)
      .invoke('show')
      .trigger('mouseenter')
      .wait(5000)
      .trigger('mouseleave');

    cy.scrollTo(0, 50, {duration: 3000, scrollBehavior: true})

    cy.get('.slot_wrapper')
      .eq(2)
      .invoke('show')
      .trigger('mouseenter')
      .wait(5000)
      .trigger('mouseleave');

    cy.wait(2000)

    cy.get('.slot_wrapper')
      .eq(3)
      .invoke('show')
      .trigger('mouseenter')
      .wait(5000)
      .trigger('mouseleave');

    cy.get('.slot_wrapper')
      .eq(4)
      .invoke('show')
      .trigger('mouseenter')
      .wait(5000)
      .trigger('mouseleave');

    cy.wait(2000)

  });


});
