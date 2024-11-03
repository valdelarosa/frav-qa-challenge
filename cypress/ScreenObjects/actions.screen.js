const testData = require("../fixtures/testData.json");
const locators = require("./locators.screen")

class actions {
    // Ingresa Codigo Postal en el modal inicial
    async sendCodPostal() {
        cy.get(locators.codPostalInput, { timeout: 8000 }).type(testData.codPostal)
        cy.get(locators.codPostalSave).click()
    }

    // Seleccion de segundo item en lista de productos
    async select2ndProduct() {
        cy.get(locators.productList).then(($items) => {
            if ($items.length > 1) {
                cy.wrap($items)
                    .eq(1)
                    .click();
            } else {
                cy.log('Alerta - Se encontraron menos de 2 productos en la lista');
            }
        });
    }

    async fillPreEmail() {
        //Verificando que estamos en seccion pre-email
        cy.get(locators.preEmailTitle, { timeout: 8000 })
            .should('be.visible');

        //Ingresar email y navegar a Finalizar compra
        cy.get(locators.preEmailInput)
            .clear()
            .type(testData.clientData.email)

        cy.get(locators.preEmailContinue)
            .should('be.enabled')
            .click()
    }

    async fillClientForm() {
        // Completar todos los campos del client form
        cy.get(locators.clientEmail)
            .clear()
            .type(testData.clientData.email);
        cy.get(locators.clientName).type(testData.clientData.name);
        cy.get(locators.clientLastName).type(testData.clientData.lastName);
        cy.get(locators.clientDocument).type(testData.clientData.document);
        cy.get(locators.clientPhoneCode).type(testData.clientData.phone1);
        cy.get(locators.clientPhoneNumber).type(testData.clientData.phone2);
        // Continuar a Shipping 
        cy.get(locators.goShippingButton)
            .should('be.enabled')
            .click();
    }
}

module.exports = new actions()