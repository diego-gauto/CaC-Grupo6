import userExist, { contraseñaCorrecta } from "./utils.js";

const usuarios = [
  { email: "maradona@gmail", pass: "123" },
  { email: "rodolfo@gmail", pass: "123" },
];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

/*function userExist(userEmail, users) {
  return users.some((user) => user.email == userEmail);
}

const contraseñaCorrecta = (contraseña, email, users) => {
  return contraseña == getPass(email, users);
};

const getPass = (userEmail, users) => {
  return users.find((user) => user.email == userEmail).pass;
};*/

const formLogin = document.getElementById(`formulario`);

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById(`inputEmail`).value;
  const pass = document.getElementById(`inputPassword`).value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  console.log(usuarios);
  if (!userExist(email, usuarios)) {
    alert("Credenciales incorrectas");
  } else if (!contraseñaCorrecta(pass, email, usuarios)) {
    alert("Credenciales incorrectas");
  } else {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: email,
        pass: pass,
      })
    );

    formLogin.reset();
    alert("Login Exitoso");
    window.location.href = "../index.html";
  }
});
