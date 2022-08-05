//console.log() - o console dá saida em informações no console do navegador!
const tarefa = {
    nmTask: '',
    descTask:'',
    dtTask: '',
    task(nmTask, descTask, dtTask){
        this.nmTask = nmTask.value;
        this.descTask = descTask.value;
        this.dtTask = dtTask.value;


    }
}


const btn = document.getElementById('btnEnviar');

btn.addEventListener('click', () => {

    let inputs = document.querySelectorAll('input[type=text], input[type=date]')
    tarefa.task(inputs[0], inputs[1], inputs[2])
    console.log(tarefa)
;
})



let tarefasHtml = document.querySelector('.tarefas');

