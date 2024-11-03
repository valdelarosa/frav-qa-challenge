/// <reference types="cypress"/>

const locators = require("../ScreenObjects/locators.screen")
const actions = require("../ScreenObjects/actions.screen");
const testData = require("../fixtures/testData.json");


describe('Caso de Uso 2 - Verificación de Producto en Shopping Cart', () => {
  before(() => {
    cy.setViewPort();
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  });
  let productName = "";

  it('Ingresar Codigo Postal en modal inicial', () => {
    actions.sendCodPostal();
  });

  it('Verificar carga correctamente el homepage', () => {
    cy.get(locators.headerHome)
        .should('be.visible'); 
    cy.get(locators.footerHome)
        .should('be.visible'); 
  });

  it('Buscar un producto y verificar si esta en lista de productos', () => {
    cy.get(locators.searchBar)
        .type(testData.targetProduct.prod2 + "{enter}");
    cy.get(locators.resultList)
        .should('be.visible'); 
    cy.get(locators.productList)
    .eq(0)
    .should("contain.text",testData.targetProduct.prod2);
    });

  it('Seleccionando un producto de la lista', () => {
    cy.get(locators.productList, {timeout:8000})
      .eq(0)
      .click()
      cy.wait(3000)
  });

  it('Guardando los datos de la informacion del producto', () => {
    cy.get(locators.productTitle, { timeout: 8000 })
      .invoke('text')
      .then(($name) => {
        productName = $name;
      });
  });

  it('Verificando existencia del producto en shopping cart', () => {
    cy.get(locators.buyButton)
      .eq(0)
      .click({ force: true });
  });

  it('Verificando nombre de producto en modal shopping cart', () => {
    // Click en "Continuar comprando" para navegar a homepage
    cy.contains(locators.continueButton).click()
    cy.get(locators.cartIcon).click()

    //Verificando que el producto seleccionado sea el mismo presente en modal Carrito de compras
    cy.get(locators.cartModalProdName)
      .contains.text, productName;
  });

  it('Probar url de navegación de categorías', () => {
    cy.contains(testData.targetUrl).click();
    cy.url().should('include', '/centro-de-ayuda');
  });
});