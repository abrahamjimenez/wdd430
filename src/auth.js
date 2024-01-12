"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring = require("querystring");
var dotenv = require("dotenv");
dotenv.config();
var WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
var WooCommerce = new WooCommerceRestApi({
    url: "https://vivantaire.com/",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
});
var store_url = "https://vivantaire.com/";
var endpoint = "/wc-auth/v1/authorize";
var params = {
    app_name: "Jewelry Products",
    scope: "read_write",
    user_id: 123,
    return_url: "http://app.com/return-page",
    callback_url: "https://app.com/callback-endpoint",
};
var queryString = querystring.stringify(params).replace(/%20/g, "+");
console.log(store_url + endpoint + "?" + queryString);
WooCommerce.get("products")
    .then(function (response) {
    console.log("Products:", response.data);
})
    .catch(function (error) {
    console.error("Error retrieving products:", error);
});
