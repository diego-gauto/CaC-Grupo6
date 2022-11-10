export default 

function userExist(userEmail, users) {
    return users.some((user) => user.email === userEmail)
  }