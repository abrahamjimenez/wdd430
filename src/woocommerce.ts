// todo: display data
import dotenv = require("dotenv");

dotenv.config();
interface CategoryData {
    id: number
    name: string
    slug: string
}

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: "https://vivantaire.com/",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
});

WooCommerce.get("products")
    .then((response: any) => {
        // response returns an object with data, but that's too much typing so im good
        // console.log("Products:", response.data);

        response.data.forEach((product: any) => {
            // console.log(product);
            // product returns a list with a bunch of data

            const name: string = product.name;
            const sku: string = product.sku;
            const stock: number = product.stock_quantity;
            const price: string = product.price;

            const categories = product.categories; // Array of objects
            const featured: boolean = product.featured; // Boolean

            const images = product.images; // Array

            // console.log(name);
            // console.log(sku);
            // console.log(stock);
            // console.log(price);

            // console.log(categories);
            let categoryList = [];
            categories.forEach((category: CategoryData) => {
                // console.log(category);
                categoryList.push(category.name);
            });
            // console.log(categoryList);
            // console.log(categories.length)

            // console.log(tags); I got no tags 👁️👄👁️
            // console.log(featured);

            // console.log(images)
            images.forEach((image: any) => {
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
    .catch((error) => {
        console.error("Error retrieving products:", error);
    });