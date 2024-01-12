import querystring = require("querystring");
import dotenv = require("dotenv")
dotenv.config()

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: "https://vivantaire.com/",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
});

type Params = {
    app_name: string
    scope: string
    user_id: number
    return_url: string
    callback_url: string
}

const store_url: string = "https://vivantaire.com/";
const endpoint: string = "/wc-auth/v1/authorize";
const params: Params = {
    app_name: "Jewelry Products",
    scope: "read_write",
    user_id: 123,
    return_url: "http://app.com/return-page",
    callback_url: "https://app.com/callback-endpoint",
};
const queryString: string = querystring.stringify(params).replace(/%20/g, "+");

console.log(store_url + endpoint + "?" + queryString);

WooCommerce.get("products")
    .then((response) => {
        console.log("Products:", response.data);
    })
    .catch((error) => {
        console.error("Error retrieving products:", error);
    });