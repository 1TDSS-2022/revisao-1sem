
//console.log() - o console dá saida em informações no console do navegador!
//console.log("Alô Mundo!")

//document - O documet manipula elementos do DOM
//document.write("Olá Mundo!")

const btn = document.getElementById("btnEnviar")

const btn2 = document.getElementById("btnEnviar2")

//addEventLister - Adiciona um evento ao elemento da página
//Função declarada dentro do metodo
//Explicação ao invés de "  func(){ alert("alerta")}  "
//vira  "   ()=>{ alert("alerta")}  "
btn.addEventListener("click", ()=>{
    alert ("CLICADO POR FUNÇÃO ANONIMA")
})


btn2.addEventListener("click", ()=>{
    alert('Resultado: ' + minhaFuncao())    
})

function minhaFuncao() {

    //LET - Utilizado em escopo fechado
    let a = 10;
    let b = 10;
    return (a + b);
}

// utilizado em escopo aberto
var c = 5

const btn3 = document.getElementById("btnEnviar3")

btn3.addEventListener("click", ()=>{
    //Cria um array com todos os input
    let inputTask = document.querySelectorAll("input")

    //Puxa o input que está na terceira posição da página HTML e troca o texto dele
    inputTask[2].value = btn.innerText
})

