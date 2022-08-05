//console.log() o console da saída em informações no console do navegador!
// F12 ou CTRL+SHIFT+I = acesso a ferramenta do desenvolvedor 
//console.log("Alô mundo")

//dcumment - O document manipula o elemento do DOM
//document.write("Olá mundo!")
//const btn = document.getElementById("btnEnviar")

//function msg(){
//    alert('cliquei')
//}

//btn.addEventListener("click",()=> {
   //alert(`resultado: ${minhaFuncao()}` )
   //let inputTask = document.querySelector("input[name=descTask]")
   //let inputTask = document.querySelectorAll("input")

   //inputTask[2].value = btn.innerHTML
//})

//const minhaFuncao = () => {
//    let a = 10
//    let b = 10
//    return (a+b)
//}
//var c = 5

// Criar o objeto 
//Adicionar os dados dos campos no objeto 
//imprimir o objeto com console.log()



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

//Recuperando o botão de adicionar tarefa 
const btn = document.getElementById('btnEnviar')

// Atrelar o evento de click ao botão de adicionar tarefa
btn.addEventListener('ckick',function(){
    //Recuperar os dados do FORM
    let nmTask = ducument.querySelectorAll('input=[type=text],input[type=data]')
    
    tarefa.task(inputTask[0].value,inputTask[1].value,inputTask[2].value)
    console.log(tarefa)
})