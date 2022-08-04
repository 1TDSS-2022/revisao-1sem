// console.log() - O console da saída em informações no console do navegador
console.log("Hello world")

//document - O documento manipula elementos do DOM
document.write("Hello world")

const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", function() {

    //alert(`Resultado: ${myFunction()})`)
    //let inputTask = document.querySelector("input[name=descTask]")
    
    let inputTask = document.querySelectorAll("input")

    inputTask[input.length -1].value = btn.value
})

// Arrow function

const myFunction = () => {
    let a = 10
    let b = 10
    return(a + b+ c)
}

//HOISTING
var c = 5

//Criar um objeto
//Adicionar os dados aos campos no objeto
//Imprimir o objeto com console.log

let pc = {

    placaVideo: "Galax",
    processador: "Intel",
    qtndMemory: "16gb",
    disk: ""
}