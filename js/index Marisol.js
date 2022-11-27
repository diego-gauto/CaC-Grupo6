/* window.addEventListener('DOMContentLoaded', () =>{
    
window.onload=iniciar;
 */
/* function iniciar(){
    const btnBusqueda=  document.querySelector("botonLupita").onclick= buscar();
    console.log("se hizo click en botón de busqueda");
}
},false);

function buscar(){
var escrito = document.querySelector("#botonB");
escrito.addEventListener('keyup', tipeo=> {
    console.log(escrito.value);
var quitar = document.getElementById("carouselExampleIndicators").innerHTML =" aqui se muestran productos que coinciden ";
var quit =  document.getElementById("cardsOfertas").innerHTML ="  ";
productos.forEach(productos => { */
//console.log("Nombre: %s, categoria %d", productos.nombre, productos.categoria );

//if (escrito.value == productos.nombre){
//  var mostrar = document.getElementById("carouselExampleIndicators").innerHTML = productos.  ;
//crearCards();
// }
//}
//}
//});
//});
//función para agregar las cards a html
// function crearCards(productos){
//}

// objetos de manera externa
/* async function traerProductos(){
    const response= await  fetch('https://fakerapi.it/api/v1/products?_quantity=10');
    return response.json; 
}
const data = console.log(traerProductos()); 
    console.log(data.data);
 */

//function cargarProductos(){
//   console.log(fetch(productos));
//}
/* const JSONString = JSON.stringify(JSONData)
const JSONDisplay = document.querySelector("#json")
JSONDisplay.innerHTML = JSONString */

/* function obtenerProductos(){
    const prod =  fetch('CaC-Grupo6\data\products.json');
    //const data = await prod.json();
    console.log(prod);
    return prod;
    
    } 
     */
const getProducts = async () => {
  let products = JSON.parse(localStorage.getItem("products"));

  if (!products) {
    const response = await fetch("../data/products.json");
    products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
  }
  return products;
};

const currentProducts = await getProducts();

console.log(currentProducts);

/*  const productos = [{
    "1": {
    "id": 1,
    "nombre": "Producto 1",
    "img": "C:\Users\maris\OneDrive\Desktop\gup6nuevo\CaC-Grupo6\Images\imagesBusqueda\7b85bada2e2d4329bdd4aa3100c072a6_9366.webp",
    "descripcion": "lorem insump 1",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-21T08:00:00.000Z"
    },
    "2": {
    "id": 1,
    "nombre": "Producto 2",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 2",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-22T08:00:00.000Z"
    },
    "3": {
    "id": 3,
    "nombre": "Producto 3",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 3",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-23T08:00:00.000Z"
    },
    "4": {
    "id": 4,
    "nombre": "Producto 4",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 4",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-24T08:00:00.000Z"
    },
    "5": {
    "id": 5,
    "nombre": "Producto 5",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 5",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-25T08:00:00.000Z"
    },
    "6": {
    "id": 6,
    "nombre": "Producto 6",
    "img": "../ImagesBusqueda/",
    "descripcion": "lorem insump 6",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-26T08:00:00.000Z"
    },
    "7": {
    "id": 7,
    "nombre": "Producto 7",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 7",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-27T08:00:00.000Z"
    },
    "8": {
    "id": 8,
    "nombre": "Producto 8",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 8",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-28T08:00:00.000Z"
    },
    "9": {
    "id": 9,
    "nombre": "Producto 9",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 9",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-29T08:00:00.000Z"
    },
    "10": {
    "id": 10,
    "nombre": "Producto 10",
    "img": "../images/notebook.webp",
    "descripcion": "lorem insump 10",
    "categoria": "electrodomesticos",
    "precio": 1000,
    "descuento": 20,
    "stock": 10,
    "createdAt": "2012-08-30T08:00:00.000Z"
    }
}]  ;
 */

//}
