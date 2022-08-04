
//console.log() - O console dá saída em informações no console do navegador!
//console.log("Alô mundo")

//document - O documento manipula elementos do DOM - somente se tirar o defer
//(o defer deixa a ação do document write em stand by)
//document.write("Olá Mundo")

const btn = document.getElementById("btnEnviar")

//function msg(){
//   alert('resultado : ')
// }

btn.addEventListener("click",()=>{
    //alert('Resultado : ${minhaFuncao()}' )
    //let inputTask = document.querySelector("input[nam=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText


})

//arow function
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return(a + b + c)
}
//HOISTING
var c = 5

//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS DO OBJETO
//IMPRIMIR O OBJETO COM console.log()
