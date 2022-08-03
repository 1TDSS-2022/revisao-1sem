//console.log() - saída de informações no console do navegador
//console.log("Oi")

//document.write() - saída de informações na janela do navegador
//document.write("AAAAAAA")

//const minhaFuncao=()=>{
//    let a = 10
//    return (a + c)
//}
//var c = 5

const btnEnviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener('click',()=>{
    //    alert(`Resultado : ${minhaFuncao()}`)
    //    let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")
    inputTask[2].value = btnEnviar.innerHTML  
})

// CRIAR UM OBJETO

// ADICIONAR OS DADOS DOS CAMPOS NO OBJETO

// IMPRIMIR O OBJETO COM console.log()