
//console.log() - o console dá saida em informações no console do navegador!
//console.log("Alô Mundo!")

//document - O documet manipula elementos do DOM
//document.write("Olá Mundo!")

const btn = document.getElementById("btnEnviar")

//function msg(){
//    alert('CLIQUEI')
//}

btn.addEventListener("click",()=>{
    alert('Resultado: ${minhaFuncao()}' )
    let inputTask = document.querySelectorAll("input") 

    inputTask[2].value = btn.innerText
})

const minhaFuncao =() => {
    let a = 10
    let b = 10
    return (a + b + c)
}




var c = 5