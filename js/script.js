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

//CRIADO UM OBJETO
const chocolate = new Object();

chocolate.sabor = "Ao leite";
chocolate.marca = "Lindt"
chocolate.peso = 0.500

console.log(chocolate)

//CRIAR UM OBJETO
const tarefa= {
    nmTask: '',
    dtTask: '',
    descTask: '',

    //ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
    task : function (nmTask, dtTask, descTask) {
        this.nmTask = nmTask
        this.dtTask = dtTask
        this.descTask = descTask
    }
}

//ATRELANDO O EVENTO DE CLICK AO BOTÃO DE ADICIONAR TAREFA
btn.addEventListener('click', function() {
    //RECUPERANDO OS DADOS DO FORM
    let inputTask = document.querySelectorAll('input')

    tarefa.task(inputTask[0].value, inputTask[1].value, inputTask[2].value)
    console.log(tarefa)
})



//IMPRIMIR O OBJETO COM console.log()