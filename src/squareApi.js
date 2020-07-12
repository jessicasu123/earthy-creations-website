var SquareConnect = require('square-connect'); 
var defaultClient = SquareConnect.ApiClient.instance; 

//Set sandbox URL 
defaultClient.basePath = "https://connect.squareupsandbox.com";
// Configure OAuth2 access token for authorization 
var oauth2 = defaultClient.authentications['oauth2']; 
oauth2.accessToken = "EAAAEIl5BeRIyLFV5_okgj0DXDMD2n2jdDQ5ECk8Q1HFhKNEQ3hFkfRyZKPPnFxV";

export async function createCheckout() {
    var checkoutAPI = new SquareConnect.CheckoutApi(); 
    var locationID = "YGCX8C4F4A8QB";
    let checkout_URL = ''; 

    const unique_key =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    const request_body = {
        idempotency_key: unique_key,
        order: {
        line_items: [
            {
            name: "Printed T Shirt",
            quantity: "2",
            base_price_money: {
                amount: 1200,
                currency: "USD",
            },
            },
        ],
        },
        ask_for_shipping_address: true,
    };
    await checkoutAPI.createCheckout(locationID, request_body).then(
        function (data) {
            const response = JSON.stringify(data);
            console.log("Returned data" + response);
            checkout_URL = data.checkout.checkout_page_url;
            console.log(checkout_URL);
            return checkout_URL;
        },
        function (error) {
            console.log(error);
        }
    );
    return checkout_URL; 
}