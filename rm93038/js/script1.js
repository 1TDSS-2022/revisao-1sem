
//CRIAR UM OBJETO
//ADICIONAR OS DADOS DOS CAMPOS NO OBJETO
//IMPRIMIR O OBJETO COM O console.log()

const tarefa = {
    nmTask: '',
    descTask:'',
    dtTask:'',
     task : function (nmTask, descTask, dtTask){
        this.nmTask = nmTask
        this.descTask = descTask
        this.dtTask = dtTask
    }
}

//Recuperando o botão de adicionar tarefa/ utiliza document para pegar o elemento no dom
const btn = document.getElementById('btnEnviar')

//Atrelando o evento de click ao botão de adicionar tarefa
btn.addEventListener('click', function(){
    //Recuperando os dados do Form
    let inputTask = document.querySelectorAll('input[type=text],input[type=date]')
    
    tarefa.task(inputTask[0].value, inputTask[1].value, inputTask[2].value)

    console.log(tarefa)
})






/*const trabalho = {
    tarefa: 'teste',
    descricao: 'descritivo'
}

trabalho.addEventListener("click", function(){
    //alert(`Resultado : ${minhaFuncao()}`)
    //let inputTask = document.querySelector("input[name=descTask]")
    let campos = document.querySelectorAll("input")

    inputTask[1].value = trabalho(1).innerText
    inputTask[2].value = trabalho(2).innerText

})*/