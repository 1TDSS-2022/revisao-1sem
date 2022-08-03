//console.log() - O console dá saída em informações no console do navegador.
//console.log("Hello World")

//document - O document manipula elementos do DOM
//document.write("Hello World")

const btn = document.getElementById("btnEnviar")

//function msg(){
//    alert('CLIQUEI')
//}

btn.addEventListener("click",()=>{
    //alert(`resultado : ${myFunction()}`)
    //let inputTask = document.querySelector("input[name = descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerHTML 
})

//ARROW FUNCTION
const myFunction = () =>{
    let a = 10
    let b = 10

    return(a + b + c)
}
//HOISTING
var c = 5

//Criar um objeto
//Adicionar os dados dos campos no objeto
//Imprimir o objeto com console.log()