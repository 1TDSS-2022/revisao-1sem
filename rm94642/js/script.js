//console.log() - O console da saida em informações no console do navegador.

//console.log("Alo mundo!");

//document - O documento manipula elementos do DOM
//document.write("Ola mundo!");

const btn  = document.getElementById("btnEnviar")

//function msg() {
//    alert('cliquei')
//}

btn.addEventListener("click", ()=> {
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText
})

//Arrow function
const minhaFuncao = () => {
    let a = 10
    let b = 10

    return(a + b + c)
}

//hoisting
var c = 5

//Criar o objeto
//adcionar os dados dos campos no objeto
//Imprimir o objeto com o console.log()