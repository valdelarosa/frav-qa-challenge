class locators {
    // Modal Codigo Postal
    get codPostalInput(){
        return '#header-geo-location-form-postal-number'
    }

    get codPostalSave(){
        return '[data-test-id="button-save-postal-code"]'
    }
    // Homepage
    get searchBar(){
        return '[placeholder="Buscar productos"]'
    }

    get cartIcon(){
        return '[data-test-id="button-cart"]'
    }

    get headerHome(){
        return 'header'
    }

    get footerHome(){
        return 'footer'
    }

    get productTitleHome(){
        return '[data-test-id="product-title"]'
    }

    // Product List 
    get productList(){
        return '[data-test-id="result-item"]'
    }
    
    get productTitle(){
        return '.sc-56271133-3 > .sc-441c2f70-7 > .sc-441c2f70-8'
    }

    get buyButton(){
        return '[data-test-id="product-buy-button"]'
    }

    // Shopping Cart
    get cartNameProduct(){
        return '.sc-b6a50d62-5'
    }

    get stockQty(){
        return '.sc-f855981b-0'
    }

    get continueButton(){
        return 'continuar comprando'
    }

    get endPurchaseButton(){
        return '#endPurchaseCart'
    }

    // Shopping Cart Modal
    get cartModalProdName(){
        return '.sc-empnci'
    }

    get resultList(){
        return '[data-test-id="results-list"]'
    }

    //Client Pre-email page
    get preEmailTitle(){
        return '.client-pre-email-h'
    }

    get preEmailInput(){
        return '#client-pre-email'
    }

    get preEmailContinue(){
        return '#btn-client-pre-email'
    }

    // End Purchase Page
    get endPurchaseTitle(){
        return '#orderform-title'
    }
    // Client Data Form
    get clientEmail(){
        return '#client-email'
    }

    get clientName(){
        return '#client-first-name'
    }

    get clientLastName(){
        return '#client-last-name'
    }

    get clientDocument(){
        return '#client-document'
    }

    get clientPhoneCode(){
        return '#client-phone1'
    }

    get clientPhoneNumber(){
        return '#client-phone3'
    }

    get goShippingButton(){
        return '#go-to-shipping'
    }
}

module.exports = new locators()