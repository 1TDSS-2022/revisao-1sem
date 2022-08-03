//console.log() - O console dá saída em informações no console do navegador!
//console.log('Alô Mundo!')

//document - O document manipula elementos do DOM
//document.write('Olá Mundo!')

const btn  = document.getElementById("btnEnviar")

//fuction msg(){
//    alert('CLIQUE')
//}

//btn.addEventListener("click",()=>{
//    alert('CLIQUE!')
//})

btn.addEventListener("click",()=>{
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTasl = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText 

})

//Arrow fuction
const minhaFuncao = () => {
    let a = 10
    let b = 10

    return (a + b + c)
}

var c = 5

//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM console.log()
