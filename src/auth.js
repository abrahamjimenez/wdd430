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
        /*categories.forEach((category) => {
            console.log(category.name)
        })*/
        // console.log(tags); I got no tags 👁️👄👁️
        // console.log(featured);
        // console.log(images)
        /* images.forEach((image) => {
             // console.log(image)
             console.log(image.src)
             // console.log(image.images[0].src)
         })*/
    });
})
    .catch(function (error) {
    console.error("Error retrieving products:", error);
});
