//console.log () - O console dá saída em informações no console do navegador!

/* console.log("Alô Mundo!") */

//document - O document manipula elemento DOM
/* document.write("Olá Mundo") */

const btn = document.getElementById("btnEnviar")

/* function msg(){
    alert ('CLIQUEI')
} */

btn.addEventListener("click",()=>{
    /* alert(`Resultado : ${minhaFuncao()}`) */
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")
    
    inputTask[2].value = btn.innerText
})

//ARROW FUNCTION 
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return(a + b + c)
}

//HOISTING
var c = 5

/* 
Criar o Objeto
Adicionar os dados dos campos no objeto
Imprimir o objeto com console.log()
*/