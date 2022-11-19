//import userExist,{contraseñaCorrecta} from "./utils"; 

const usuarios = [{email:'maradona@gmail', pass: '123' }, {email:'rodolfo@gmail', pass: '123'} ] 

localStorage.setItem('usuarios',JSON.stringify(usuarios))

function userExist(userEmail, users) {
return users.some((user) => user.email == userEmail)
}

 const contraseñaCorrecta =(contraseña,email,users)=> {
 return contraseña==getPass (email,users)
  
}

const getPass = (userEmail, users) => {
  return users.find((user) => user.email == userEmail).pass
}



const buttonEnviar = document.getElementById (`enviar`);

buttonEnviar.addEventListener ('click', (e)=>{

e.preventDefault();
const email= document.getElementById (`inputEmail`).value;
const pass= document.getElementById (`inputPassword`).value;


const usuarios = JSON.parse (localStorage.getItem ('usuarios'));
console.log (usuarios);
if (! userExist(email,usuarios)){ alert ("usuario no existente")

} else if (!contraseñaCorrecta (pass,email,usuarios)){ alert ("contraseña incorrecta")} 

else { 
    localStorage.setItem(
        'currentUser',
        JSON.stringify ({
          email: email,
          pass: pass
        }))
    
    
        formLogin.reset();
        window.location.href = '../index.html';
    



}




});


