/**
 * This class is responsible for making API calls to 
 * SquareConnect in order to create the Checkout page
 * with the relevant items from the Cart page.
 */
var SquareConnect = require('square-connect'); 
var defaultClient = SquareConnect.ApiClient.instance; 

//Set sandbox URL 
defaultClient.basePath = "https://connect.squareupsandbox.com";
// Configure OAuth2 access token for authorization 
var oauth2 = defaultClient.authentications['oauth2']; 
oauth2.accessToken = "EAAAEIl5BeRIyLFV5_okgj0DXDMD2n2jdDQ5ECk8Q1HFhKNEQ3hFkfRyZKPPnFxV";

const { v4: uuidv4 } = require("uuid");

export async function createCheckout(cartItems) {
    var checkoutAPI = new SquareConnect.CheckoutApi(); 
    var locationID = "YGCX8C4F4A8QB";
    let checkout_URL = ''; 

    const unique_key = uuidv4();

    let lineItems = cartItems.map((cartItem) => {
        return {
            name: cartItem.artwork.title,
            quantity: "1",
            base_price_money: {
                amount: cartItem.artwork.price * 100,
                currency: "USD",
            },
        };
    });

    const request_body = {
        idempotency_key: unique_key,
        order: {
        line_items: lineItems,
        },
        ask_for_shipping_address: true,
    };
    await checkoutAPI.createCheckout(locationID, request_body).then(
        function (data) {
            const response = JSON.stringify(data);
            checkout_URL = data.checkout.checkout_page_url;
            return checkout_URL;
        },
        function (error) {
            console.log(error);
        }
    );
    return checkout_URL; 
}