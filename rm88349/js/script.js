//console.log() - o console.log da saida em informações no console do navegador
console.log("ola Mundo!")
//document - manipula elementos do DOM
// document.write("Olá Mundo!")
const btn = document.getElementById("btnEnviar")

// function msg(){
//     alert('clicado')

// }
//arrow function
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return (a+b)
}

btn.addEventListener("click", () =>{
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")
    inputTask[2].value = btn.innerText

})


//criar um objeto
//adicionar os dados dos campos no objeto
// imprimir o objeto com console.log