import { handleLoginLogout } from "./utils.js";

const pagoTarjeta = document.getElementById("flexRadioTarjeta");
const pagoTransferencia = document.getElementById("flexRadioTransferencia");
const divTarjeta = document.getElementById("pago_tarjeta");
const divTransferencia = document.getElementById("pago_transferencia");
const buttonComprar = document.getElementsByClassName("pagar");

const carritoMockeo = {
  1: {
    id: 1,
    nombre: "Producto 1",
    img: "../images/notebook.webp",
    descripcion: "lorem insump 1",
    categoria: "electrodomesticos",
    precio: 1000,
    descuento: 20,
    stock: 10,
    createdAt: "2012-08-21T08:00:00.000Z",
  },
  3: {
    id: 3,
    nombre: "Producto 3",
    img: "../images/notebook.webp",
    descripcion: "lorem insump 3",
    categoria: "electrodomesticos",
    precio: 1000,
    descuento: 20,
    stock: 10,
    createdAt: "2012-08-23T08:00:00.000Z",
  },
  5: {
    id: 5,
    nombre: "Producto 5",
    img: "../images/notebook.webp",
    descripcion: "lorem insump 5",
    categoria: "electrodomesticos",
    precio: 1000,
    descuento: 20,
    stock: 10,
    createdAt: "2012-08-25T08:00:00.000Z",
  },
  7: {
    id: 7,
    nombre: "Producto 7",
    img: "../images/notebook.webp",
    descripcion: "lorem insump 7",
    categoria: "electrodomesticos",
    precio: 1000,
    descuento: 20,
    stock: 10,
    createdAt: "2012-08-27T08:00:00.000Z",
  },
  9: {
    id: 9,
    nombre: "Producto 9",
    img: "../images/notebook.webp",
    descripcion: "lorem insump 9",
    categoria: "electrodomesticos",
    precio: 1000,
    descuento: 20,
    stock: 10,
    createdAt: "2012-08-29T08:00:00.000Z",
  },
};
//  localStorage.setItem("carrito", JSON.stringify(carritoMockeo));

const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

const generarCards = (productos) => {
  // Obtenemos el div que contendra las cards de productos
  let cards = document.getElementById("carrito");

  let total = 0;

  //productos.forEach((producto) => {
  for (const key in productos) {
    total += productos[key].precio; // total = total + producto.precio;

    // Creamos la etiqueta Card
    let cardProductos = document.createElement("div");
    cardProductos.className = "col";

    let card = `
                <div class="card">
                  <img class="card-img-top" src="${productos[key].img}" alt="Card image">
                  <div class="card-body">
                      <h4 class="card-title">${productos[key].nombre}</h4>
                      <p class="card-text">
                        Categoría: ${productos[key].categoria}
                      </p>
                      <p class="card-text">
                          ${productos[key].descripcion}
                      </p>
                      <p class="card-text">
                          Precio: $ ${productos[key].precio},00
                      </p>
                      <a class="btn btn-primary" id="cart${productos[key].id}">Eliminar</a>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Fecha de ingreso ${productos[key].createdAt}</small>
                  </div>
                </div>
          `;

    cardProductos.innerHTML = card;
    cards.appendChild(cardProductos);

    let productCard = document.getElementById("cart" + productos[key].id);

    productCard.addEventListener("click", (evento) => {
      evento.preventDefault();
      const products = JSON.parse(localStorage.getItem("products"));
      products[productos[key].id] = productos[key];
      delete productos[key];
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("carrito", JSON.stringify(productos));
      location.reload();
    });
  }
  let totalCarrito = document.getElementById("total");
  totalCarrito.textContent = total;
};

handleLoginLogout();

generarCards(carrito);

pagoTarjeta.addEventListener("click", () => {
  //console.log(e.target.checked);
  // if (e.target.checked) {
  divTarjeta.style.display = "flex";
  divTarjeta.style.flexDirection = "column";
  divTransferencia.style.display = "none";
});

pagoTransferencia.addEventListener("click", () => {
  //console.log(e.target.checked);
  // if (e.target.checked) {
  divTransferencia.style.display = "flex";
  divTransferencia.style.flexDirection = "column";
  divTarjeta.style.display = "none";
});

Array.prototype.slice.call(buttonComprar).forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products"));
    for (const key in carrito) {
      delete products[key];
    }
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("carrito", JSON.stringify({}));
    window.location.href = "../index.html";
  });
});
