
//console.log() - o console da saida em informações no console do navegador
console.log("hello world")

//document - o document manipula elementos do DOM
document.write("hello world") //não funciona com o defer :/

// getElementById é bom para elementos unicos, ja o querySelector é bom para elementos que se repetem :)

const btn = document.getElementById("btnEnviar")

//criado uma constante (não se altera) para o botão de enviar :)

//function msg(){
//   alert('clique')
//}

//criada uma função que faz um alert mas retorna, diferente de uma função alert dentro do event listener que não retorna
//essa forma gasta mais linhas de código :/

btn.addEventListener("click",()=>{
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    //ou
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText

})
//arrow function diminui a escrita e tambem trabalha com atribuições 
//nesse exemplo foi criado um eventListener usando uma arrow function para um clique que mostra um alert e retorna

const minhaFuncao = () => {
    let a = 10
    let b = 10

    return (a + b + c)
} 

//Exemplo de arrow function :)
//let é utilizado para declarar valores para um escopo fechado

var c = 5

//Hoisting = var pode ser usado fora da ordem "top-down", as variaveis sempre ficam no topo e nesse caso é possivel somar um valor colocado depois :)

//criar um objeto
//adicionar os dados dos campos no objeto
//imprimir o objeto com console.log() :)
//chorar no banho :(