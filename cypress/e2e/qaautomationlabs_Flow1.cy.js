/// <reference types="cypress" />

describe("UI QAAutomationLabs.com", { 
  testIsolation: false }, () => {
  it("Open URL", () => {
    cy.visit("https://qaautomationlabs.com/");
  });
  it("Click on Read More ", () => {
    cy.get(".staticslider-button").click();
  });
  it("Verify Particular Blog ", () => {
    cy.contains(
      "Running End-to-End Cypress Test cases In Google Cloud Build Pipeline"
    );
  });
  it("Click on Blogs", () => {
    cy.contains("Blog").scrollIntoView().click({ force: true });
  });
  it("Search the datas", () => {
    cy.get('[id="wp-block-search__input-2"]').scrollIntoView();
    cy.get('[id="wp-block-search__input-2"]')
      .click({ force: true })
      .type("cypress");
    cy.get('[id="search-icon"]').click({ force: true });
    cy.contains("Search Results for: cypress");
  });
});
