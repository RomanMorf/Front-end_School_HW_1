describe('Test main page', () => {

  it('Visits the app root url', () => {
    cy.visit('/')

    cy.scrollTo(0, 500, {duration: 1500, scrollBehavior: true})


    cy.get('input.header_input') 
      .type('My First search text', {duration: 1500})

    cy.scrollTo(0, 1500, {duration: 1500, scrollBehavior: true})

    cy.get('input.header_input') 
      .clear()

    cy.get('input.header_input') 
      .type('hello ))))', {duration: 1500})

    cy.get('input.header_input') 
      .clear()

    cy.get('input.header_input')
      .type('hi there ! )))', {duration: 1500})

    cy.scrollTo(0, 3000, {duration: 3000, scrollBehavior: true})

    cy.scrollTo(0, 2000, {duration: 8000, scrollBehavior: true})
    cy.scrollTo(0, 1000, {duration: 8000, scrollBehavior: true})
    cy.scrollTo(0, 500, {duration: 3000, scrollBehavior: true})
  });

  it('Visits profile url', () => {
    cy.visit('/profile/kikakiim', {duration: 5000})

    cy.scrollTo(0, 1000, {scrollBehavior: true, duration: 3000})
    cy.wait(1000)

    cy.scrollTo(0, 100, {duration: 5000})
    cy.wait(1000)

    cy.scrollTo(0, 50, {duration: 3000})

    cy.get('.slot_wrapper:first')
      .invoke('show')
      .trigger('mouseenter')
      .wait(5000)
      .trigger('mouseleave');

    cy.scrollTo(0, 50, {duration: 3000})

    cy.wait(2000)

  });

  it('back to the root url', () => {
    cy.visit('/')

    cy.scrollTo(0, 500, {duration: 1500, scrollBehavior: true})

    cy.scrollTo(0, 1000, {duration: 1500, scrollBehavior: true})

    cy.get('input.header_input') 
      .clear()

    cy.scrollTo(0, 0, {duration: 1500, scrollBehavior: true})

    cy.get('input.header_input') 
    .type('finish the test', {duration: 200})
  });
});

describe('Test video buttons page', () => {

  it('test mute bottun', () => {
    cy.visit('/')

    cy.scrollTo(0, 100, {duration: 1500, scrollBehavior: true})
      .wait(5000)

    cy.get('div.card')
      .eq(1)
      .find('span.card_video-muted')
      .click()

    cy.get('input.header_input') 
      .type('now video is muted', {duration: 1500})

    cy.scrollTo(0, 2500, {duration: 10000, scrollBehavior: true})

    cy.scrollTo(0, 0, {duration: 12000, scrollBehavior: true})
      .wait(5000)

    cy.get('input.header_input') 
      .clear()
      .type('muted is off now', {duration: 1500})

    cy.get('div.card')
      .eq(1)
      .find('span.card_video-muted')
      .click()
      .wait(2000)

    cy.scrollTo(0, 2000, {duration: 10000, scrollBehavior: true})
    cy.scrollTo(0, 0, {duration: 10000, scrollBehavior: true})
  });
});
