import { handleLoginLogout } from "./utils.js";

const carritoMockeo = [
  {
    id: 1,
    nombre: "Producto 1",
    img: "../images/notebook.webp",
    precio: 1000,
    descripcion: "lorem insump 1",
    stock: 10,
    categoria: "electrodomesticos",
  },
  {
    id: 2,
    nombre: "Producto 2",
    img: "../images/notebook.webp",
    precio: 2000,
    descripcion: "lorem insump 2",
    stock: 20,
    categoria: "electrodomesticos",
  },
  {
    id: 3,
    nombre: "Producto 3",
    img: "../images/notebook.webp",
    precio: 3000,
    descripcion: "lorem insump 3",
    stock: 30,
    categoria: "electrodomesticos",
  },
  {
    id: 4,
    nombre: "Producto 4",
    img: "../images/notebook.webp",
    precio: 4000,
    descripcion: "lorem insump 4",
    stock: 40,
    categoria: "electrodomesticos",
  },
  {
    id: 5,
    nombre: "Producto 5",
    img: "../images/notebook.webp",
    precio: 5000,
    descripcion: "lorem insump 5",
    stock: 50,
    categoria: "electrodomesticos",
  },
];

localStorage.setItem("carrito", JSON.stringify(carritoMockeo));

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const generarCards = (productos) => {
  // Obtenemos el div que contendra las cards de productos
  let cards = document.getElementById("carrito");

  let total = 0;

  productos.forEach((producto) => {
    total += producto.precio; // total = total + producto.precio;

    // Creamos la etiqueta Card
    let cardProductos = document.createElement("div");
    cardProductos.className = "card m-3";

    let card = `
              <img class="card-img-top h-50 w-50" src="${producto.img}" alt="Card image cap">
              <div class="card-body">
                  <h4 class="card-title">${producto.nombre}</h4>
                  <p class="card-text">
                      ${producto.descripcion}
                  </p>
                  <p class="card-text">
                      ${producto.precio}
                  </p>
                  <a class="btn btn-primary" id="cart${producto.id}">Eliminar</a>
              </div>
          `;

    cardProductos.innerHTML = card;
    cards.appendChild(cardProductos);

    let productCard = document.getElementById("cart" + producto.id);

    productCard.addEventListener("click", (evento) => {
      evento.preventDefault();
      carrito.splice(producto.id - 1, 1);
    });
  });
};

generarCards(carrito);

/*const formulario = document.getElementById("form-carrito");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  localStorage.setItem("Carrito", JSON.stringify(carrito));
});*/

handleLoginLogout();
