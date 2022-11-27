export default function userExist(userEmail, users) {
  return users.some((user) => user.email === userEmail);
}

export const handleLoginLogout = () => {
  const loginLogout = document.getElementById("loginlogout");

  if (localStorage.getItem("currentUser")) {
    loginLogout.textContent = "Logout";
    loginLogout.href = "#";
  }

  loginLogout.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (evento.target.textContent === "Logout") {
      localStorage.removeItem("currentUser");
      evento.target.textContent = "Login";
      evento.target.href = "login.html";
      window.location.href = "index.html";
    } else window.location.href = "login.html";
  });
};

export const contraseñaCorrecta = (contraseña, email, users) => {
  const getPass = (userEmail, users) => {
    return users.find((user) => user.email === userEmail).pass;
  };
  return contraseña === getPass(email, users);
};
