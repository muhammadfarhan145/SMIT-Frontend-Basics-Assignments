//Products Array

const products = [
    { name: "Laptop", category: "electronics" } ,
    { name: "Table", category: "furniture" } ,
    { name: "Mobile", category: "electronics" } ,
    { name: "Monitor", category: "electronics" } ,
    { name: "Sneakers", category: "shoes" } ,
    { name: "Boots", category: "shoes" } ,
];

const product_card = document.getElementById("Product_card");
const search_dropdown = document.getElementById("search_dropdown");
const search_input = document.getElementById("search_input");

function displayProducts(filterproduct){
    product_card.innerHTML = "";
    if (filterproduct.length === 0){
        product_card.innerHTML = "<p>No Product Found!</p>";
        return
    }

    filterproduct.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<h4>${p.name}</h4><small>${p.category}</small>`;
        product_card.appendChild(div);
    });
}

function filterproduct() {
    const category = search_dropdown.value;
    const searchproduct = search_input.value.toLowerCase();

    const filtered = products.filter(p => {
        const match_dropdown = category === "all" || p.category === category;
        const match_search = p.name.toLowerCase().includes(searchproduct);
        return match_dropdown && match_search;
    })

    displayProducts(filtered)
}

search_dropdown.addEventListener("change", filterproduct);
search_input.addEventListener("input", filterproduct);

displayProducts(products)


