"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
var WooCommerce = new WooCommerceRestApi({
    url: "https://vivantaire.com/",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
});
WooCommerce.get("products")
    .then(function (response) {
    console.log("Products:", response.data);
    response.data.forEach(function (product) {
        var name = product.name;
        var sku = product.sku;
        var stock = product.stock_quantity;
        var price = product.price;
        console.log(name);
        console.log(sku);
        console.log(stock);
        console.log(price);
    });
})
    .catch(function (error) {
    console.error("Error retrieving products:", error);
});
