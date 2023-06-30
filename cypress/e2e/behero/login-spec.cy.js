describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    // Preencher o input com o valor "1"
    cy.get('input[name="id"]').type("1");

    // Clicar no botão "Entrar"
    cy.get("button.button").click();

    // Verificar se o texto está presente na tela
    cy.contains("Valor incorreto!").should("be.visible");

    // Preencher o input com o valor "1"
    cy.get('input[name="id"]').type("111");

    // Clicar no botão "Entrar"
    cy.get("button.button").click();

    // Verificar se a URL mudou após o clique no botão
    cy.url().should("eq", "http://localhost:3000/procfile");
  });
});
