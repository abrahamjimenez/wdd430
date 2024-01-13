var main = document.querySelector("main");
function displayData() {
    fetch("https://vivantaire.com/wp-json/wc/v3/products?consumer_key=ck_665f65ce8f554103aa7998be28c922d4364afc4a&consumer_secret=cs_1f6396ce119551bf6d3d44d6cfa0a8435babc0c1")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.forEach(function (product) {
            var name = product.name;
            var sku = product.sku;
            var stock = product.stock_quantity;
            var price = product.price;
            var categories = product.categories; // Array of objects
            var featured = product.featured; // Boolean
            var images = product.images; // Array
            var categoryList = [];
            categories.forEach(function (category) {
                categoryList.push(category.name);
            });
            images.forEach(function (image) {
                // Reference HTML Elements
                var divElement = document.createElement("div");
                var imgElement = document.createElement("img");
                var nameElement = document.createElement("p");
                var skuElement = document.createElement("p");
                var stockElement = document.createElement("p");
                var priceElement = document.createElement("p");
                var categoryListElement = document.createElement("p");
                var featuredElement = document.createElement("p");
                // Populate Elements with data
                imgElement.src = image.src;
                imgElement.alt = name;
                nameElement.textContent = name;
                skuElement.innerHTML = sku ? "<strong>Sku:</strong> ".concat(sku) : "";
                stockElement.innerHTML = stock ? "<strong>Status:</strong> In Stock" : "Not In Stock";
                priceElement.innerHTML = "<strong>Price:</strong> ".concat(price);
                categoryListElement.innerHTML = "<strong>Categories:</strong> ".concat(categoryList.join(", ").toString());
                featuredElement.textContent = featured ? "Featured Item" : "";
                // Tailwind here because I totally planned this out LOL
                main.classList.add("pl-3.5", "pr-3.5");
                divElement.classList.add("pt-5", "pb-5");
                imgElement.classList.add("rounded-lg");
                // Add HTML Elements to div
                divElement.appendChild(imgElement);
                divElement.appendChild(nameElement);
                divElement.appendChild(skuElement);
                divElement.appendChild(stockElement);
                divElement.appendChild(priceElement);
                divElement.appendChild(categoryListElement);
                divElement.appendChild(featuredElement);
                // Add div to dom & display HTML Elements
                main.appendChild(divElement);
            });
        });
    })
        .catch(function (error) {
        console.error(error);
    });
}
document.addEventListener("DOMContentLoaded", displayData);
