// pratica


// Criando o objeto tarefa
const tarefa ={
    nmTask:'',      // atributos referentes aos campos inputs
    descTask:'',
    dtTask:'',
        task:function(nmTask,descTask,dtTask){ // metodo construtor para atribuir os parametros ao atributo
            this.nmTask     = nmTask
            this.descTask   =descTask
            this.dtTask     =dtTask
        }
}


// recuperar o botao
const btn = document.getElementById("btnEnviar")

//Atrelar evento de click ao botao add a tarefa popular o objeto

btn.addEventListener('click',function(){
        // Recuperando os dados do form
    let inputTask= document.querySelectorAll('input[type=text],input[type=date]')
    tarefa.task(inputTask[0].value,inputTask[1].value,inputTask[2].value)
    console.log(tarefa)

})






















// no painel do desenvolvedor
// console.log("Começamos a Revisão JS")

// document.write("Escrevendo com Write") deve usar sem o defer ... procura o primeiro espaço para escrever diretamente no html


// const botao = document.getElementById("btnEnviar")

// botao.addEventListener("click",()=>{
// //    let inputTask = document.querySelectorAll("input[name=descTask]")
// let inputTask = document.querySelectorAll()

// inputTask[2].value=botao.innerText


// })


//tarefa 
//Criar Objeto
//adicionar os dados cmpos no objeto
// printo no console.log





// botao.addEventListener("click",()=>{
//     alert(minhaFuction())
// })

// modelo de como criar uma funcao // realizar dessa forma

// const minhaFuction = ()=>{
//     let a = 10

//     let b = 10

//     return (a+b)
// }








