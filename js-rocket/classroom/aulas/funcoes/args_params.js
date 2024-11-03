/*
  - Parâmetros: é a variável (escopo da função) que irá
  receber um valor em uma função.
  - Arqugumentos: é o valoir que é passado para função.
*/

let username = 'João'
                //parâmetro
function message(username){
  console.log(`Olá ${username}`)
}
     //argumento
message('Luan')


function sum(a,b){
  console.log(a+b)
}

sum(10,230)
sum(-5,-55)
sum(30,40)
sum(1.5,2.75)

function joinText(text1, text2 = 'Não informado', text3 = 'Não informado'){
  console.log(text1, text2, text3)
}

joinText('Luan', 'Carlos', 'Dantas')
