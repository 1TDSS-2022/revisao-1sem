//console.log() - o console da saída em informações no console do navegador!!

//console.log("Olá Mundo!")

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", ()=>{
    //alert('Resultado : ${minhaFuncao()}')
    let inputTask =  document.querySelectorAll("input")   
    
    inputTask[2].value = btn.innerText

})

// Arrow function
const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return (a + b + c)
}

var c = 5

//Criar um Objeto
//Adicionar os dados dos campos no objeto
// imprimir o objeto com console.log()
