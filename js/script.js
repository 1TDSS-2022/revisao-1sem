//console.log() - O console da saída em informações no console do navegador!
console.log("Olá Mundo!")

//document - O document manipula elementos do DOM
//document.write("Alô Mundo!") Obs. se estiver com o defer no script, não funciona.

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", ()=>{
    //alert(`Resultado: ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText
})

//ARROW FUNCTION
const minhaFuncao = ()=> {
    let a = 10
    let b = 10
    return (a + b + c)
}

//HOISTING
var c = 5

//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM console.log()