import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página da VV Test", () => {
  cy.visit("http://www.lourencodemonaco.com.br/vvtest/").viewport(1920, 1080);
  cy.wait(2000); //algumas vezes, o cache atrapalhava o teste ao carregar a página muito rápido antes do "click" seguinte ter a chance de funcionar
});

And("acesse o menu Pesquisa - QA", () => {
  cy.get("#menu-item-226").click().url().should("include", "vvtest/pesquisa/");
});

When("eu preencher todos os campos obrigatórios", () => {
  cy.get("#nf-field-5").type("Levy").should("have.value", "Levy");

  cy.get("#nf-field-6").type("Azevedo").should("have.value", "Azevedo");

  cy.get("#nf-field-7")
    .type("fake@email.com")
    .should("have.value", "fake@email.com");
  cy.get("#nf-field-8")
    .type("fake@email.com")
    .should("have.value", "fake@email.com");

  cy.get("#nf-field-17")
    .type("(48)99111-2222")
    .should("have.value", "(48)99111-2222");

  cy.get("#nf-label-class-field-10-0")
    .click()
    .should("have.class", "nf-checked-label");

  cy.get("#nf-field-11").select("Menos de 5 anos");
  cy.get("#nf-field-11").should("have.value", "menos-de-5-anos");

  cy.get("#nf-field-12").select("Sou mega chato");
  cy.get("#nf-field-12").should("have.value", "sou-mega-chato");

  cy.get("#nf-label-class-field-13-0")
    .click()
    .should("have.class", "nf-checked-label");

  cy.get("#nf-field-14").type("Javascript").should("have.value", "Javascript");

  cy.get("#nf-field-16").click();
});

Then("deve ser direcionado para uma página de sucesso", () => {
    cy.contains('#post-2', 'Your form has been successfully submitted.').should('be.visible')
});
