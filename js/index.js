import { handleLoginLogout } from "./utils.js";

const buttonSearch = document.getElementById("button-search");
const linkHome = document.getElementById("go-home");

const getProducts = async () => {
  let products = JSON.parse(localStorage.getItem("products"));

  if (!products) {
    const response = await fetch("../data/products.json");
    products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("carrito", JSON.stringify({}));
  }

  if (localStorage.getItem("onSearch") === true)
    products = JSON.parse(localStorage.getItem("searchProducts"));

  console.log(products);
  return products;
};

const getOfferProducts = (products) => {
  const offerProducts = {};
  for (const key in products) {
    if (products[key].descuento) {
      offerProducts[products[key].id] = products[key];
    }
  }
  return offerProducts;
};

const generarCards = (products) => {
  // Obtenemos el div que contendra las cards de productos
  let cards = document.getElementById("offers");
  while (cards.hasChildNodes()) cards.removeChild(cards.firstChild);

  //productos.forEach((producto) => {
  for (const key in products) {
    // Creamos la etiqueta Card
    let cardProductos = document.createElement("div");
    cardProductos.className = "col";

    let card = `
                <div class="card">
                  <img class="card-img-top" src="${
                    products[key].img
                  }" alt="Card image">
                  <div class="card-body">
                      <h4 class="card-title">${products[key].nombre}</h4>
                      <p class="card-text">
                        Categoría: ${products[key].categoria}
                      </p>
                      <p class="card-text">
                          ${products[key].descripcion}
                      </p>
                      <p class="card-text">
                          Precio: $ ${
                            products[key].descuento
                              ? products[key].precio *
                                (1 - products[key].descuento / 100)
                              : products[key].precio
                          },00
                      </p>
                      <a class="btn btn-primary" id="cart${
                        products[key].id
                      }">Agregar al carrito</a>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Fecha de ingreso ${
                      products[key].createdAt
                    }</small>
                  </div>
                </div>
          `;

    cardProductos.innerHTML = card;
    cards.appendChild(cardProductos);

    let productCard = document.getElementById("cart" + products[key].id);

    productCard.addEventListener("click", (evento) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        evento.preventDefault();
        const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
        carrito[products[key].id] = products[key];
        delete currentProducts[products[key].id];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("products", JSON.stringify(currentProducts));
        if (JSON.parse(localStorage.getItem("onSearch"))) {
          const searchProducts = JSON.parse(
            localStorage.getItem("searchProducts")
          );
          delete searchProducts[products[key].id];
          localStorage.setItem(
            "searchProducts",
            JSON.stringify(searchProducts)
          );
        }
        location.reload();
      } else {
        alert("Debe ingresar para poder comprar");
      }
    });
  }
};

linkHome.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("onSearch", false);
  location.reload();
});

const currentProducts = await getProducts();
const offerProducts = getOfferProducts(currentProducts);

handleLoginLogout();

generarCards(offerProducts);
