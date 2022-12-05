export default function userExist(userEmail, users) {
  return users.some((user) => user.email === userEmail);
}

export const contraseñaCorrecta = (contraseña, email, users) => {
  const getPass = (userEmail, users) => {
    return users.find((user) => user.email === userEmail).pass;
  };
  return contraseña === getPass(email, users);
};

export const handleLoginLogout = () => {
  const loginLogout = document.getElementById("loginlogout");
  const registrarse = document.getElementById("registrarse");
  const profile = document.getElementById("profile");

  console.log(registrarse);

  if (localStorage.getItem("currentUser")) {
    loginLogout.textContent = "Logout";
    loginLogout.href = "#";
    profile.style.display = "inline";

    registrarse.style.display = "none";
  }

  loginLogout.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (evento.target.textContent === "Logout") {
      const products = JSON.parse(localStorage.getItem("products"));
      const carrito = JSON.parse(localStorage.getItem("carrito"));
      for (const key in carrito) {
        products[carrito[key].id] = carrito[key];
      }
      localStorage.setItem("products", JSON.stringify(products));

      localStorage.removeItem("currentUser");
      localStorage.removeItem("carrito");
      localStorage.removeItem("onSearch");
      localStorage.removeItem("searchProducts");
      evento.target.textContent = "Login";
      evento.target.href = "../pages/login.html";
      window.location.href = "../index.html";
    } else window.location.href = "../pages/login.html";
  });
};
