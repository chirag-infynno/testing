import { COMPONENT_LIST } from "../../src/utils/constant";
import { TemplateConstant } from "../../src/utils/templateconstant";

const getDataTestId = (id) => {
  return cy.get(`[data-testid="${id}"]`);
};

describe("Testing home page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("WEB_URL"));
    // cy.visit("http://localhost:3000");
  });

  it("Components load testing", () => {
    cy.contains("UI elements that are beautifully Made with Tailwind CSS");
    cy.contains("By the Infynno Solutions");
    getDataTestId("Components-navlink").click({ timeout: 500 });
    cy.wait(1000);

    for (let index = 0; index < COMPONENT_LIST?.length; index++) {
      let x, y;
      cy.wait(1000);
      getDataTestId(`card-${index}`).then(($el) => {
        x = $el[0].getBoundingClientRect().x;
        y = $el[0].getBoundingClientRect().y - 200;
        cy.scrollTo(x, y);
        cy.wait(2000);
        getDataTestId(`card-${index}`).click();
        cy.wait(2000);
        cy.contains("404").should("not.exist");
        cy.contains("This page could not be found.").should("not.exist");
        cy.wait(2000);
        cy.get(`[data-testid="preview"]`)
          .invoke("removeAttr", "target")
          .click();
        cy.wait(2000);
        cy.contains("404").should("not.exist");
        cy.contains("This page could not be found.").should("not.exist");
        cy.go("back");
        cy.wait(2000);
        cy.go("back");
      });
    }

    getDataTestId("Templates-navlink").click({ timeout: 500 });
    cy.wait(1000);

    for (let index = 0; index < TemplateConstant?.length; index++) {
      let x, y;
      cy.wait(1000);
      getDataTestId(`card-${index}`).then(($el) => {
        x = $el[0].getBoundingClientRect().x;
        y = $el[0].getBoundingClientRect().y - 200;
        cy.scrollTo(x, y);
        cy.wait(5000);
        getDataTestId(`card-${index}`).click();
        cy.wait(5000);
        cy.contains("404").should("not.exist");
        cy.contains("This page could not be found.").should("not.exist");
        cy.wait(5000);
        cy.get(`[data-testid="preview"]`)
          .invoke("removeAttr", "target")
          .click();
        cy.wait(5000);
        cy.contains("404").should("not.exist");
        cy.contains("This page could not be found.").should("not.exist");
        cy.go("back");
        cy.wait(5000);
        cy.go("back");
      });
    }
  });
});
