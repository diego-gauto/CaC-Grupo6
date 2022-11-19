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

// si se apreta buscar o se selecciona una categoria
// ocultar el carrousel
// ocultar las cards de ofertas

// generamos otro objeto que se puede llamar productosBuscados partiendo desde currentProducts filtrando por los criterios de busquedas
// generamos nuevas cards mostrando los productos buscados
