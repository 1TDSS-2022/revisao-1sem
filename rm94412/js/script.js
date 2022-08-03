//console.log() o console da saída em informações no console do navegador!
// F12 ou CTRL+SHIFT+I = acesso a ferramenta do desenvolvedor 
//console.log("Alô mundo")

//dcumment - O document manipula o elemento do DOM
//document.write("Olá mundo!")
const btn = document.getElementById("btnEnviar")

//function msg(){
//    alert('cliquei')
//}

btn.addEventListener("click",()=> {
   //alert(`resultado: ${minhaFuncao()}` )
   //let inputTask = document.querySelector("input[name=descTask]")
   let inputTask = document.querySelectorAll("input")

   inputTask[2].value = btn.innerHTML
})

const minhaFuncao = () => {
    let a = 10
    let b = 10
    return (a+b)
}
var c = 5

// Criar o objeto 
//Adicionar os dados dos campos no objeto 
//imprimir o objeto com console.log()