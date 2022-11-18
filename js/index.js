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
