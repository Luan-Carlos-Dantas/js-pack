//ESCOPO - Define o contexto da variável
//Escopo da declaração VAR
console.log("----VAR-----")
console.log(user)

var user = 'Luan'

// Hoisting
var user

console.log(user)

var email = 'luan@email.com'
{
  console.log(email)
}

{
  var age = 25
}

console.log(age)
console.log("---------")
console.log("----LET / CONST-----")
let address = 'Rua H'
console.log(address)

{
  console.log(phone)
  let phone = '91234-5678'
}

console.log(phone)

console.log("---------")
