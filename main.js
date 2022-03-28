// fetch("/products.json")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         localStorage.setItem("produkter", JSON.stringify(data));
//     });

// var retrievedObject = localStorage.getItem("produkter");

// const products = JSON.parse(retrievedObject);

// console.log(products);


var products = JSON.parse(localStorage.getItem("products"));

const root = document.getElementById("root");
products.map((product, i) => {
    product.id = i;
    root.innerHTML += `
  
  <div class="col-lg-3 col-md-4 mt-3">
    <div class="card">
      <img
        class="card-img-top"
        src="${product.image}"
        alt="${product.alt}"
      />
      <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
        <p class="card-text">${product.text}</p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <a class="btn btn-success ms-auto me-1 buyProduct">Buy</a>
        <a class="btn border-info ms-auto me-1 detailsProduct">Details</a>
      </div>
    </div>


  `;
});

const modalBg = document.getElementById("modalBg");
const shoppingCartList = document.getElementById("productList");
const shoppingCardListProducts = document.getElementById(
    "shoppingCardListProducts"
);
const shoppingCart = document.getElementById("shoppingCart");
const shopingCartCounter = document.getElementById("shoppingCartCounter");
const productList = [];

function test() {
    const buyProducts = document.querySelectorAll(".buyProduct");
    const detailsProduct = document.querySelectorAll(".detailsProduct");
    const selected = document.querySelectorAll("select");
    buyProducts.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            let boughtItem = Object.assign([], products[i]);
            boughtItem.number = selected[i].value;
            productList.push(boughtItem);
            console.log(productList);
            shoppingCartCounter.innerHTML = productList.length;
            shoppingCartListProducts.innerHTML = "";
            productList.forEach((product) => {
                shoppingCartListProducts.innerHTML += `<p>${product.title} - ${product.number}</p>`;
            });
        });
    });
    detailsProduct.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            console.log(products[i].desc);
            shoppingCartList.style.display = "block";
            modalBg.style.display = "block";
            document.body.style.overflow = "hidden";
            shoppingCartListProducts.innerHTML = `<p>${products[i].desc}</p>`;
        });
    });
}

shoppingCart.addEventListener("click", () => {
    shoppingCartListProducts.innerHTML = "";
    productList.forEach((product) => {
        shoppingCartListProducts.innerHTML += `<p>${product.title} - ${product.number} enheter</p>`;
    });
    let displayValue = getComputedStyle(shoppingCartList).display;
    let displayValueModal = getComputedStyle(modalBg).display;
    displayValue == "block"
        ? ((shoppingCartList.style.display = "none"),
          (document.body.style.overflow = "scroll"))
        : ((shoppingCartList.style.display = "block"),
          (document.body.style.overflow = "hidden"));
    modalBg.style.display = "block";
    displayValueModal == "block"
        ? ((modalBg.style.display = "none"),
          (document.body.style.overflow = "hidden"))
        : (modalBg.style.display = "block");
});
modalBg.addEventListener("click", () => {
    shoppingCartList.style.display = "none";
    modalBg.style.display = "none";
    document.body.style.overflow = "scroll";
});
test();

let searchField = document.getElementById("searchProducts");
searchField.addEventListener("keyup", () => {
    let result = products.filter((product) =>
        product.title.toLowerCase().includes(searchField.value.toLowerCase())
    );
    root.innerHTML = "";
    result.forEach((product) => {
        root.innerHTML += `<div class="col-lg-3 col-md-4 mt-3">
    <div class="card">
      <img
        class="card-img-top"
        src="${product.image}"
        alt="${product.alt}"
      />
      <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
        <p class="card-text">${product.text}</p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <a class="btn btn-success ms-auto me-1 buyProduct">Buy</a>
        <a class="btn border-info ms-auto me-1 detailsProduct">Details</a>
      </div>
    </div>`;
    });
    test();
});