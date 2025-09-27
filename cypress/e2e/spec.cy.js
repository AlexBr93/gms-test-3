describe('US-015 - Recomendações DO DIA ', () => {
  it('Deve Mostrar entre 4 e 5 filmes listados', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#recommendations-section > h2').should('have.text', 'RECOMENDAÇÕES DO DIA')
    cy.get('#recommendations > :nth-child(1) > img').should('be.visible')//verificando se a imagem dentro do primeiro item
    cy.get('#recommendations > :nth-child(2) > img').should('be.visible')//verificando se a imagem dentro do segundo item   
    cy.get('#recommendations > :nth-child(3) > img').should('be.visible')//verificando se a imagem dentro do terceiro item
    cy.get('#recommendations > :nth-child(4) > img').should('be.visible')//verificando se a imagem dentro do quarto item
    cy.get('#recommendations > :nth-child(5) > img').should('be.visible')//verificando se a imagem dentro do quinto item
    
    cy.get('#recommendations > :nth-child(1) > img')//verificando se a imagem dentro do primeiro item
   //Deveria ter cy.get('#search-button').click() para ir diretamente a pagina do filme.
    cy.get(':nth-child(1) > p').should('not.be.empty')//verificando se o parágrafo dentro do primeiro item não está vazio
    cy.get('#recommendations-section').should('have.length.at.most', 5)//verificando se tem no maximo 5 itens
    cy.get('#recommendations > :nth-child(3)')
  cy.get('input:visible')//verificando se o input está visível
 })
})