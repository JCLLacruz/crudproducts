describe('Testing my crudProducts', () => {
  it('passes', () => {
    cy.visit('https://main.d3pqv0p9sznj81.amplifyapp.com/')
    cy.contains("Home")
  }),
 
  it('Create Product', function() {
 
    cy.visit('https://main.d3pqv0p9sznj81.amplifyapp.com/')
 
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

  cy.visit('https://main.d3pqv0p9sznj81.amplifyapp.com/')
 
    cy.get('#app > header > .wrapper > nav > a:nth-child(3)').click()
 
    cy.get(':nth-child(1) > #for > :nth-child(3)').click()
 
    cy.get('div > #updateProductDivForm > form > div > #updateProductName').type('squirtle Update2')
 
    cy.get('main > div > #updateProductDivForm > form > div:nth-child(3)').click()
 
    cy.get('div > #updateProductDivForm > form > div > #updatePrice').type('5')
 
    cy.get('main > div > #updateProductDivForm > form > button:nth-child(5)').click()
 
    cy.get('main > div > #updateProductDivForm > form > button:nth-child(6)').click()

})


it('delete product', function() {

  cy.visit('https://main.d3pqv0p9sznj81.amplifyapp.com/')

  cy.get('#app > header > .wrapper > nav > a:nth-child(3)').click()

  cy.get(':nth-child(1) > #for > :nth-child(4)').click()

})
})
