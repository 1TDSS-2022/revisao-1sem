
//console.log() - O console dá saída em informações no console do navegador!
//console.log("Hello World")

//document - O documento manipula elemento do DOM
//document.write("Hello World")

const btn = document.getElementById("btnEnviar")

//function msg(){
//    alert('CLIQUE')
//}

btn.addEventListener("click",()=>{
    //alert(`Resultado : ${minhaFuncao()}` )
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText
})

//ARROW FUNCTION
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return (a + b+ c)
}
//WOISTING
var c = 5

//CRIAR O OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM Console.log()