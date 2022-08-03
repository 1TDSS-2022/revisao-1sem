//o JS lê todos os elementos antes de rodar


// console.log() - O console dá saida em informações no console do navegador
//console.log("Alô Mundo!!!")

// document - O document manipula elementos do DOM
//document.write("Olá Mundo!!!") //- Com o Defer, o write não funciona, ele fica em espera

const btn = document.getElementById("btnEnviar")

/*function msg(){
    alert('CLIQUEI !!!')
}*/

/*btn.addEventListener("click", function(){
    alert("CLIQUEI !!!")
})*/


btn.addEventListener("click", function(){
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText

})

//ARROW FUNCTION
const minhaFuncao = () => {
    let a = 10
    let b = 10

    return (a + b + c)
}
//HOISTING
var c = 5

//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM O console.log()
