//console.log() - O console da saida em informações no console do navegador
//console.log("Hello World")

//document - manipula o documento html
//document.write("Hello World")

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", ()=>{
    //alert(`Cliquei : ${minhaFuncao()}`) 
    //let inputTask = document.querySelector("input[name=nmTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerHTML

})

//forma correta de criar funções
const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return (a + b)
}

//o var tem uma propriedade no JS que é o roist, ou seja, todas as variaveis 
//de escopo global são levadas para cima do codigo
var c = 5