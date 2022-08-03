//console.log() - O console dá saida em informações no console do navegador
console.log("Hello World!")
//document - manipula elementos do DOM
//.write("Hi, how are u?")

const btn = document.getElementById('btnEnviar');
btn.addEventListener('click', () =>{
    // alert(`Resultado : ${minhaFuncao()}`)
    // let inputTask = document.querySelector('input[name=descTask]')
    let inputTask = document.querySelectorAll('input')
    
    inputTask[2].value = btn.innerText 
})

//PARA CRIAR FUNCAO
const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return (a+b+c)
}

let c = 

//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM console.log()