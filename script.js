//console.log - O console dá saída em informações no console do navegador!
//console.log("Olá mundo!")

//documento - Manipula elementos do DOM
//document.write("Olá mundo!")

const btn = document.getElementById('btnEnviar')

//function msg(){
//    alert('CLIQUEI!')
//}
btn.addEventListener("click", ()=>{
    //alert(`Resultado: ${minhaFuncao()}!`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll('input')
    inputTask[2].value = btn.innerHTML
})

//Arrow function
const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return(a+b+c)
}
//Hoisting
var c = 5

//Criar o objeto
//Adicionar os dados dos campos no objeto
//Imprimir o objeto com cosole.log()