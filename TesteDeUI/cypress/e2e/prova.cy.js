/// <reference = cypress>

describe("Teste do site https://automationintesting.online/", () => {
    it("Envio de email corretamente", () => {
        cy.visit("https://automationintesting.online/")
        insereInformacoesCompletas()
        cy.get('[data-testid="ContactDescription"]').type("Lorem ipsum dolor sit amet. Qui harum deserunt non quis tempore ut possimus.")
        cy.get('#submitContact').click()
        cy.get(':nth-child(2) > div > h2').should("contain.text", "Thanks for getting in touch")
    })

    it("Erro de Envio de mensagem com menos de 20 caracteres", () => {
        cy.visit("https://automationintesting.online/")
        insereInformacoesCompletas()
        cy.get('[data-testid="ContactDescription"]').type("Lorem ipsum.")
        cy.get('#submitContact').click()
        cy.get('.alert > p').should("contain.text", "Message must be between 20 and 2000 characters.")
    })

})

function insereInformacoesCompletas() {
    cy.get('[data-testid="ContactName"]').type("NOMEPARATESTE")
    cy.get('[data-testid="ContactEmail"]').type("email@outlook.com")
    cy.get('[data-testid="ContactPhone"]').type("35 99999-9999")
    cy.get('[data-testid="ContactSubject"]').type("Envio de email automatizado")
}