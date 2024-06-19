describe('Testing my crudProducts', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Home")
  }),
 
  it('Create Product', function() {
 
    cy.visit('http://localhost:5173/')
 
    cy.get('#app > header > .wrapper > nav > a:nth-child(3)').click()
 
    cy.get('div > div > form > div > #productName').click()
 
    cy.get('div > div > form > div > #productName').type('pepe')
 
    cy.get('div > div > form > div > #description').type('fuego')
 
    cy.get('div > div > form > div > #price').type('100')
 
    cy.get('div > div > form > div > #image_path').type('54')
 
    cy.get('main > div > div:nth-child(2) > form > button').click()

    cy.wait(1000)

    cy.contains("Mis productos")
 })


 it('Product update', function() {

  cy.visit('http://localhost:5173/')

  cy.get('#app > header > .wrapper > nav > a:nth-child(3)').click()

  cy.get('#app > header > .wrapper > nav > .router-link-active').click()

  cy.get('#app > main > div > div:nth-child(3) > button:nth-child(2)').click()

  cy.get('div > #updateProductDivForm > form > div > #updateProductName').click()

  cy.get('div > #updateProductDivForm > form > div > #updateProductName').type('charizard Update')

  cy.get('main > div > #updateProductDivForm > form > button:nth-child(5)').click()

  cy.get('div > #updateProductDivForm > form > div > #updatePrice').type('100')

  cy.get('main > div > #updateProductDivForm > form > button:nth-child(5)').click()

  cy.get('main > div > #updateProductDivForm > form > button:nth-child(6)').click()

  cy.contains("Mis productos")

})

it('Product delete', function() {

  cy.visit('http://localhost:5173/')

  cy.get('#app > header > .wrapper > nav > a:nth-child(3)').click()

  cy.get('#app > main > div > div:nth-child(3) > button:nth-child(3)').click()

  cy.contains("Mis productos")

})



})
