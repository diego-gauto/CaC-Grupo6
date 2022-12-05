import { handleLoginLogout } from "./utils.js";

const pagoTarjeta = document.getElementById("flexRadioTarjeta");
const pagoTransferencia = document.getElementById("flexRadioTransferencia");
const divTarjeta = document.getElementById("pago_tarjeta");
const divTransferencia = document.getElementById("pago_transferencia");
const buttonComprar = document.getElementsByClassName("pagar");
const linkHome = document.getElementById("go-home");

const carrito = JSON.parse(localStorage.getItem("carrito")) || {};

const generarCards = (productos) => {
  // Obtenemos el div que contendra las cards de productos
  let cards = document.getElementById("carrito");

  let total = 0;

  //productos.forEach((producto) => {
  for (const key in productos) {
    total += productos[key].descuento
      ? productos[key].precio * (1 - productos[key].descuento / 100)
      : productos[key].precio; // total = total + producto.precio;

    // Creamos la etiqueta Card
    let cardProductos = document.createElement("div");
    cardProductos.className = "col";

    let card = `
                <div class="card">
                  <img class="card-img-top" src="${
                    productos[key].img
                  }" alt="Card image">
                  <div class="card-body">
                      <h4 class="card-title">${productos[key].nombre}</h4>
                      <p class="card-text">
                        Categoría: ${productos[key].categoria}
                      </p>
                      <p class="card-text">
                          ${productos[key].descripcion}
                      </p>
                      <p class="card-text">
                          Precio: $ ${
                            productos[key].descuento
                              ? productos[key].precio *
                                (1 - productos[key].descuento / 100)
                              : productos[key].precio
                          },00
                      </p>
                      <a class="btn btn-primary" id="cart${
                        productos[key].id
                      }">Eliminar</a>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Fecha de ingreso ${
                      productos[key].createdAt
                    }</small>
                  </div>
                </div>
          `;

    cardProductos.innerHTML = card;
    cards.appendChild(cardProductos);

    let productCard = document.getElementById("cart" + productos[key].id);

    productCard.addEventListener("click", (evento) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        evento.preventDefault();
        const products = JSON.parse(localStorage.getItem("products"));
        products[productos[key].id] = productos[key];
        delete productos[key];
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("carrito", JSON.stringify(productos));
        location.reload();
      } else {
        alert("Debe ingresar para poder comprar");
      }
    });
  }
  let totalCarrito = document.getElementById("total");
  totalCarrito.textContent = total;
};

linkHome.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../index.html";
});

handleLoginLogout();
const profile = document.getElementById("profile");
profile.style.display = "none";

generarCards(carrito);

pagoTarjeta.addEventListener("click", () => {
  divTarjeta.style.display = "flex";
  divTarjeta.style.flexDirection = "column";
  divTransferencia.style.display = "none";
});

pagoTransferencia.addEventListener("click", () => {
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
