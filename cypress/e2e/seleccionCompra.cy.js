/// <reference types="cypress"/>

const locators = require("../ScreenObjects/locators.screen");
const actions = require("../ScreenObjects/actions.screen");
const testData = require("../fixtures/testData.json");


describe('Caso de Uso 1 - Seleccionar y comprar Producto', () => {

  let productName = "";

  before(() => {
    cy.setViewPort();
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it('Ingresar Codigo Postal en modal inicial', () => {
    actions.sendCodPostal();
  });

  it('Buscando Producto: Heladera Samsung', () => {
    cy.get(locators.searchBar)
      .type(testData.targetProduct.prod1 + "{enter}")
  });

  it('Seleccionando el segundo producto de la lista', () => {
    actions.select2ndProduct();
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

    //Verificando que estamos en el carrito de compras
    cy.contains("Mi carrito")
      .should('be.visible');

    //Verificando que el producto visible sea el mismo seleccionado anteriormente
    cy.get(locators.cartNameProduct)
      .should('have.text', productName);
  });

  it('Verificando Stock del producto', () => {
    cy.get(locators.stockQty)
      .should('be.visible')
      .and('not.be.disabled');
  });

  it('Navegar a finalizar compra (Pre-email)', () => {
    cy.get(locators.endPurchaseButton)
      .should('be.enabled')
      .click();
  });

  it('Ingresar email para completar la compra', () => {
    actions.fillPreEmail();
  });

  it('Completar Formulario de cliente', () => {
    //Verificando que estamos en seccion finalizar compra
    cy.get(locators.endPurchaseTitle, { timeout: 8000 })

    //Ingresar datos en formulario de cliente
    actions.fillClientForm()
  });
});