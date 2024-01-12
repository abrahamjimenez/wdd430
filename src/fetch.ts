interface CategoryData {
    name: string;
}

interface ImageData {
    src: string;
}

interface ProductData {
    name: string;
    sku: string;
    stock_quantity: number;
    price: string;
    categories: CategoryData[];
    featured: boolean;
    images: ImageData[];
}

const main: HTMLElement = document.querySelector("main");

function displayData(): void {
    fetch("https://vivantaire.com/wp-json/wc/v3/products?consumer_key=ck_665f65ce8f554103aa7998be28c922d4364afc4a&consumer_secret=cs_1f6396ce119551bf6d3d44d6cfa0a8435babc0c1")
        .then(response => response.json())
        .then(data => {
            data.forEach((product: ProductData): void => {
                const name: string = product.name;
                const sku: string = product.sku;
                const stock: number = product.stock_quantity;
                const price: string = product.price;

                const categories: CategoryData[] = product.categories; // Array of objects
                const featured: boolean = product.featured; // Boolean

                const images: ImageData[] = product.images; // Array

                const categoryList: string[] = [];
                categories.forEach((category: CategoryData): void => {
                    categoryList.push(category.name);
                });

                images.forEach((image: any): void => {
                    // Reference HTML Elements
                    const divElement: HTMLDivElement = document.createElement("div");
                    const imgElement: HTMLImageElement = document.createElement("img");
                    const nameElement: HTMLParagraphElement = document.createElement("p");
                    const skuElement: HTMLParagraphElement = document.createElement("p");
                    const stockElement: HTMLParagraphElement = document.createElement("p");
                    const priceElement: HTMLParagraphElement = document.createElement("p");
                    const categoryListElement: HTMLParagraphElement = document.createElement("p");
                    const featuredElement: HTMLParagraphElement = document.createElement("p");

                    // Populate Elements with data
                    imgElement.src = image.src;
                    imgElement.alt = name;
                    nameElement.textContent = name;
                    skuElement.innerHTML = sku ? `<strong>Sku:</strong> ${sku}` : "";
                    stockElement.innerHTML = stock ? "<strong>Status:</strong> In Stock" : "Not In Stock";
                    priceElement.innerHTML = `<strong>Price:</strong> ${price}`;
                    categoryListElement.innerHTML = `<strong>Categories:</strong> ${categoryList.join(", ").toString()}`;
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
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener("DOMContentLoaded", displayData);