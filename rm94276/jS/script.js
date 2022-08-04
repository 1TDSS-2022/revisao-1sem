//console.log() - exibi o valor da variável no console do navegador

console.log("Alô Mundo!!!")

//document - manipula lementos do DOM
//document.write("Olá Mundo!!!")

const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click', ()=>{
    alert(`Resultado : ${minhaFuncao()}`)
})

const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return (a + b)
}

var c = 5

btnEnviar.addEventListener('click', ()=>{
    //let inputask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll('input')

    inputTask[0].placeholder = "Ai preto"
    inputTask[2].value = btnEnviar.innerText
    input
})

//Criar um objeto
//Adicionar os dados dos campos no objeto
//Imprimir o objeto com consoe.log()