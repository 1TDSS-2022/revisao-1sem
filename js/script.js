const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", ()=>{
    //alert(`Resultado : ${minhaFuncao()}`)

    //let inputTask = document.querySelector("input[name=]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText

})
//ARROW FUNCTION
const minhaFuncao = ()=>{
    let a = 10
    let b = 10
    return (a + b + c)
}
//HOISTING
var c = 5

//EXERCICE
//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJERO COM console.log()