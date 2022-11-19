export default function userExist(userEmail, users) {
    return users.some((user) => user.email === userEmail)
  }

export const contraseñaCorrecta =(contraseña,email,users)=> {
   return contraseña===getPass (email,users)
    
}

const getPass = (userEmail, users) => {
    return users.find((user) => user.email === userEmail).pass
  }
