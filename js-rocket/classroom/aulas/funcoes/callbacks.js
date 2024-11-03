// Callback function: é uma função passada para outra função como argumento;

function execute(taskName, callback){
  console.log("Executando a tarefa: ", taskName)

  callback()
}

function callback(){
  console.log("Callback finalizada")
}
execute("Download do arquivo", callback)

execute("Upload do arquivo", ()=>console.log("Arrow function finalizada"))
