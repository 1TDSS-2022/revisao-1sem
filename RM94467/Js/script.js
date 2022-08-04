
//console.log() = o console da saida tem informções no console do navegador!
//console.log("Olá Mundo")

//document = O document manipula elementos do FOM

//document.write("Olá Mundo!")

const btn = document.getElementById("btnEnviar")



btn.addEventListener("click",()=>{
   // alert('Resultado :${minhaFuncao()}' )
   //let inputTask = document.querySelector("input[name=desckTask]")
   let inputTask = document.querySelectorAll("input")

   inputTask(2).value = btn.innerText

})

//AROW FUNCTION
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return (a + b + c)
}

//HOSTING
var c = 5

//CRIAR O OBJETO 
//ADICIONAR OS DADOSaaaaaaa DOS CAMPOS DO OBJETO
//IMPRIMIR O OBJETO COM console.log()