//console.log() -> console da saida em informações do navegador!
//console.log("Hello world!")

//document -> O document manipula elementos do dom
//document.write("Hello World!")

const btn = document.getElementById("btnEnviar")
btn.addEventListener("click", () => {
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerHTML
})


const minhaFuncao = () => {
    let a = 10
    let b = 10
    return (a + b + c)
}

var c = 5

//Criar um objeto
//Adicionar os dados dos campos no objeto
//Imprimir o objeto com o console.log