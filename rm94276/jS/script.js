//console.log() - exibi o valor da variável no console do navegador

//console.log("Alô Mundo!!!")

//document - manipula lementos do DOM
//document.write("Olá Mundo!!!")

const btnEnviar = document.getElementById('btnEnviar')
const btnLimpar = document.getElementById('limparId')
//btnEnviar.addEventListener('click', ()=>{
    //alert(`Resultado : ${minhaFuncao()}`)
//})

const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return (a + b)
}

var c = 5

//btnEnviar.addEventListener('click', ()=>{
    //let inputask = document.querySelector("input[name=descTask]")
    //let inputTask = document.querySelectorAll('input')

    //inputTask[0].placeholder = "Modificado"
    //inputTask[2].value = btnEnviar.innerText
//})

//Verificando se inputs estão vazios

btnEnviar.addEventListener("click", ()=>{
    let inputs = document.querySelectorAll('input')

    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].value == ""){
        alert("O campo " + inputs[i].placeholder + " não foi preenchido!")
        return
    }  
    }
    alert("Dados enviados!!!")
})


//Criar um objeto
//Adicionar os dados dos campos no objeto
//Imprimir o objeto com consoe.log()
const informacoes = {
    tarefa : "",
    data : "",
    descricao : "",
    preencher : function(tarefa, data, descricao){
        this.tarefa = tarefa.value
        this.data = data.value
        this.descricao = descricao.value
    }
}

btnEnviar.addEventListener("click", ()=>{
    //Recuperando dados dos forms
    let campos = document.querySelectorAll('input[type=text], input[type=date]')
    	
    informacoes.preencher(campos[0], campos[1], campos[2])
    console.log(informacoes)
    //campos[0].value = informacoes.tarefa
    //campos[1].value = informacoes.data
    //campos[2].value = informacoes.descricao
})

console.log(informacoes)

//Comando limpando dados dos Inputs
btnLimpar.addEventListener("click", ()=>{
    document.getElementById('nmTaskId').value = "";
    document.getElementById('dtTaskId').value = "";
    document.getElementById('descTaskId').value = "";
})


