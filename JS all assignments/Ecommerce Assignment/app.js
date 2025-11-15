// ---------------- Products List ----------------
const Products = [
  {
    id: 1,
    title: "T Shirt",
    price: "500",
    category: "Clothing",
    Desc: "A Fit and Comfortable T-shirt.",
    img: "./Assets/teeimg2.jpeg",
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: "600",
    category: "Clothing",
    Desc: "A Stylish And Comfortable Jacket.",
    img: "Assets/denimJacketimg.jpeg",
  },
  {
    id: 3,
    title: "Sneakers",
    price: "34",
    category: "Shoes",
    Desc: "A Quality shoes and Comfortable.",
    img: "Assets/sneakersimg.jpeg",
  },
  {
    id: 4,
    title: "Chelsea Boots",
    price: "544",
    category: "Shoes",
    Desc: "A Royal and Elegant Shoes Made With Pure Leather.",
    img: "Assets/chelseabootsimg.jpeg",
  },
  {
    id: 5,
    title: "Luxury Hand Bag",
    price: "233",
    category: "Accessories",
    Desc: "An Elegant bag with Inner Pockets Also.",
    img: "Assets/handbag2img.jpeg",
  },
  {
    id: 6,
    title: "Sunglasses",
    price: "90",
    category: "Accessories",
    Desc: "UV protection, lightweight frame.",
    img: "Assets/sunglassessimg.jpeg",
  },
  {
    id: 7,
    title: "Sando",
    price: "25.67",
    category: "Clothing",
    Desc: "A Sando for GYM!",
    img: "Assets/Sandoimg.jpeg",
  },
  {
    id: 8,
    title: "Necklace",
    price: "500.60",
    category: "Accessories",
    Desc: "A beautiful Artificial Gold Necklace",
    img: "Assets/necklaceimg.jpeg",
  },
  {
    id: 9,
    title: "Shoe For Mens",
    price: "100",
    category: "Shoes",
    Desc: "A Sports & Casual Shoes",
    img: "Assets/sneakersimg.jpeg",
  },
  {
    id: 10,
    title: "Gold Watch",
    price: "1125",
    category: "Accessories",
    Desc: "A Smart and Elegant Watch for Mens",
    img: "Assets/watchimg.jpeg",
  },
  {
    id: 11,
    title: "Bracelet",
    price: "25.50",
    category: "Accessories",
    Desc: "A Bracelel For Casual Wears",
    img: "Assets/braceletimg.jpeg",
  },
  {
    id: 12,
    title: "Denim Jeans",
    price: "125.99",
    category: "Clothing",
    Desc: "A Jeans For Casual",
    img: "Assets/denimjeans.jpeg",
  }
];

// ---------------- DOM Elements -----------------
const product_card = document.getElementById("Product_card");
const cart_counter = document.getElementById("cart_counter");
const shopbtn = document.getElementById("shopnow_button");
const search_input = document.getElementById("Search_bar");
const Tabs = document.getElementById("filters");
const innerCard = document.getElementById("innercard_div");
const inner_card_img = document.getElementById("inner_card_img");
const product_title = document.getElementById("Product_title");
const product_category = document.getElementById("Product_category");
const product_description = document.getElementById("Product_description");
const product_price = document.getElementById("modalPrice");
const add2cart_btn = document.getElementById("AddCart_btn");
const close_card_btn = document.getElementById("closeinnercard_btn");

// Start with
let cart_item = 0;
let active_tab = "all";

//  PRice Formatter
function formatprice(p) {
  return "$" + Number(p).toFixed(2);
}

function capital1letter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function antiregex(s) {
  // convert &,<,>,"
  return String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

// Cart
function add2cartbtnHandler() {
  cart_item++;
  cart_counter.textContent = cart_item;
  add2cart_btn.textContent = "Added ✓";
  setTimeout(() => (add2cart_btn.textContent = "Add to cart"), 900);
}

// Shop Now Scroll
shopbtn.addEventListener("click", () => {
  window.scrollBy({ top: 340, behavior: "smooth" });
});

// Show Products
function showProducts(filtertext = "") {
  product_card.innerHTML = "";
  const q = filtertext.trim().toLowerCase();

  const filtered = Products.filter((p) => {
    const matchesCat = active_tab === "all" || p.category === active_tab;
    const matchesText =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.Desc.toLowerCase().includes(q);
    return matchesCat && matchesText;
  });

  if (filtered.length === 0) {
    product_card.innerHTML = `<div style="width:100%; padding:40px; text-align:center; color:#6b7280">
        No Product Found
       </div>`;
    return;
  }

  filtered.forEach((prod) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img loading="lazy" src="${prod.img}" alt="${antiregex(prod.title)}" />
      <div class="title">${capital1letter(prod.title)}</div>
      <div class="category">${antiregex(capital1letter(prod.category))}</div>
      <div class="price">${formatprice(prod.price)}</div>
    `;
    card.addEventListener("click", () => openinnercard(prod));
    product_card.appendChild(card);
  });
}

// Inner Card
let currentProduct = null;

function openinnercard(prod) {
  currentProduct = prod;
  inner_card_img.src = prod.img;
  product_title.textContent = prod.title;
  product_description.textContent = prod.Desc;
  product_price.textContent = formatprice(prod.price);
  product_category.textContent = capital1letter(prod.category);

  innerCard.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeInnerCard() {
  innerCard.classList.remove("open");
  document.body.style.overflow = "";
  currentProduct = null;
}

// Events
close_card_btn.addEventListener("click", closeInnerCard);
add2cart_btn.addEventListener("click", add2cartbtnHandler);
innerCard.addEventListener("click", (e) => {
  if (e.target === innerCard) closeInnerCard();
});

Tabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tabs");
  if (!tab) return;
  Array.from(Tabs.querySelectorAll(".tabs")).forEach((c) =>
    c.classList.remove("active")
  );
  tab.classList.add("active");
  active_tab = tab.dataset.product || "all";
  showProducts(search_input.value);
});

search_input.addEventListener("input", (e) => showProducts(e.target.value));

showProducts();
