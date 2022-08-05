

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

//Recuperando o botão de adicionar tarefa\
const btn = document.getElementById('btnEnviar')

//Atrelando o evento de click ao botão de adicionar tarefa
btn.addEventListener('click',function(){
    //Recuperando os dados do FORM
    let inputTask = document.querySelectorAll('input[type=text],input[type=date]')

    tarefa.task(inputTask[0].value,inputTask[1].value,inputTask[2].value)
    console.log(tarefa)
})