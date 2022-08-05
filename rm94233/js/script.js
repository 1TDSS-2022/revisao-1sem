
//console.log() - O console dá saída em informações no console do navegador!
console.log("Alô Mundo!")

//document - O document manipula elementos do DOM
//document.write("Olá Mundo!")

//function msg(){
//  alert('CLIQUEI')
//}

btn.addEventListener("click",()=>{
    //alert(`Resultado : ${minhaFuncao()}` )
   //let inputTask = document.querySelector("input[name=descTask]") 
   let inputTask = document.querySelectorAll("input")

    inputTask[2].value = btn.innerText

})


//ARROW FUNCTION
const minhaFuncao = () => {
    let a = 10
    let b = 10
    return(a + b + c)
}

//HOISTING
var c = 5


//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM console.log()
const tarefa = {
    nmTask:'' ,
    descTask:'' ,
    dtTask:'' ,
     task : function (nmTask,descTask,dtTask){
        this.nmTask   = nmTask
        this.descTask = descTask
        this.dtTask   = dtTask
    }
}

//Recuperando o botão de adicionar tarefas\
const btn = document.getElementById('btnEnviar')

//Atrelando o evento de click ao botão de adicionar tarefa
btn.addEventListener('click', function(){
    //Recuperando os dados do FORM
    let inputTask = document.querySelectorAll('input[type=text], input[type=date]')

    tarefa.task(inputTask[0].value, inputTask[1].value, inputTask[2].value)
    console.log(tarefa)


})

