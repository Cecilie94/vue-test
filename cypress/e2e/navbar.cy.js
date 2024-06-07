// cypress/e2e/navbar.cy.js
describe("NavBar Component", () => {
  beforeEach(() => {
    // Besøg root URL'en af applikationen
    cy.visit("/");
  });

  it("should render the navigation bar", () => {
    // Tjekker om navigation baren eksisterer
    cy.get("nav").should("exist");
  });

  it("should toggle menu when nav-icon is clicked", () => {
    // Finder nav-ikonet og klikker på det
    cy.get(".nav-icon").click();
    // Tjekker om dropdown-menuen bliver synlig
    cy.get(".dropdown-menu").should("be.visible");

    // Klikker igen for at lukke menuen
    cy.get(".nav-icon").click();
    // Tjekker om dropdown-menuen bliver usynlig
    cy.get(".dropdown-menu").should("not.exist");
  });

  it("should navigate to correct routes when menu items are clicked", () => {
    cy.get(".nav-icon").click();
    cy.get(".dropdown-menu").should("be.visible");

    // Test navigation til "Registrer" siden
    cy.get(".dropdown-menu").contains("Registrer").click();
    cy.url().should("include", "/signup");

    // Test navigation til "Log ind" siden
    cy.get(".nav-icon").click();
    cy.get(".dropdown-menu").contains("Log ind").click();
    cy.url().should("include", "/signin");

    // Test navigation til "Point Shop" siden
    cy.get(".nav-icon").click();
    cy.get(".dropdown-menu").contains("Point Shop").click();
    cy.url().should("include", "/pointshop");

    // Test navigation til "Skattejagt" siden
    cy.get(".nav-icon").click();
    cy.get(".dropdown-menu").contains("Skattejagt").click();
    cy.url().should("include", "/skattejagt");
  });
});
