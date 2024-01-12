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
    // response returns an object with data, but thats too much typing so im good
    // console.log("Products:", response.data);
    response.data.forEach(function (product) {
        // console.log(product)
        // product returns a list with a bunch of data
        var name = product.name;
        var sku = product.sku;
        var stock = product.stock_quantity;
        var price = product.price;
        var categories = product.categories; // Array of objects
        var tags = product.tags; // Array of any
        var featured = product.featured; // Boolean
        var images = product.images; // Array
        // console.log(name);
        // console.log(sku);
        // console.log(stock);
        // console.log(price);
        // console.log(categories);
        var categoryList = [];
        categories.forEach(function (c) {
            categoryList.push(c.name);
        });
        // console.log(categoryList);
        // console.log(categories.length)
        // console.log(tags); I got no tags 👁️👄👁️
        // console.log(featured);
        // console.log(images)
        images.forEach(function (image) {
            // console.log(image)
            console.log(image.src);
            console.log(name);
            console.log(sku);
            console.log(stock);
            console.log(price);
            console.log(categoryList);
            console.log(featured);
        });
    });
})
    .catch(function (error) {
    console.error("Error retrieving products:", error);
});
