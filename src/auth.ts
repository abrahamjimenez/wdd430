import dotenv = require("dotenv");

dotenv.config();

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: "https://vivantaire.com/",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
});

WooCommerce.get("products")
    .then((response) => {
        console.log("Products:", response.data);

        response.data.forEach((product) => {
            const name = product.name;
            const sku = product.sku;
            const stock = product.stock_quantity;
            const price = product.price;

            console.log(name);
            console.log(sku);
            console.log(stock);
            console.log(price);
        })
    })
    .catch((error) => {
        console.error("Error retrieving products:", error);
    });