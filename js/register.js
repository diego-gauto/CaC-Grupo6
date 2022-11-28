import userExist, { handleLoginLogout } from "./utils.js";

const formulario = document.getElementById(`formulario`);
const linkHome = document.getElementById("go-home");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!userExist(email, usuarios)) {
    const user = {
      email: email,
      pass: password,
    };
    usuarios.push(user);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Su registro ha sido exitoso");
    window.location.href = "../index.html";
  } else {
    alert("Este usuario ya se encuentra registrado");
    formulario.reset();
  }
});

linkHome.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("onSearch", false);
  location.href = "../index.html";
});

handleLoginLogout();
