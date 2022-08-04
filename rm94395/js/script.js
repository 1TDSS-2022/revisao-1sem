//console.log() - o console da saida em informações no console do navegador

console.log("Hello world")

//document - o document manipula elementos do DOM   
document.write("Hello world")

const sendButton = document.getElementById("btnEnviar")

function a() {
    alert("CLIQUEI")
}

sendButton.addEventListener("click", a => {
    console.log("AHAHHAHAHHAHAHAHAHHA")
})

sendButton.addEventListener("click", () => {
    //alert(`Resultado: ${myFunction()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let inputTask = document.querySelectorAll("input")
    
    inputTask[inputTask.length -1].value = sendButton.value
})



//Arrow function
const myFunction = () => {
    let a = 10
    let b = 10
    return (a + b + c)
}

var c = 5

sendButton.addEventListener("click", a)




//Criar um objeto
let carro = {
    model: "opa",
    carName: "SamuelCar"
}
//Adicionar os dados dos campos no objeto
carro.model = "OPEE"
//imprimir o objeto com  console.log()
console.log(carro)