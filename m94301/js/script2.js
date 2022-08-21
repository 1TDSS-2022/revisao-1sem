


// const btn = document.getElementById("btnEnviar")

// btn.addEventListener("click", () => {
//     let todosInput = document.querySelectorAll("input")
//     let campoVazio = 0

//     for (i = 0; i < todosInput.length; i++) {
//         if (todosInput[i].value == "") {
//             campoVazio++

//         }
//         //todosInput[i].value = "a";
//     }

//     if (campoVazio >= 1){
//     alert("Preencha todos os campos!" + campoVazio)
//     } else {
//         alert("Tudo certo!")
//         for (i = 0; i < todosInput.length; i++) {
//             alert(todosInput[i].value)
//         }
//     }

// })


//Recuperando o elemento button
const btn = document.getElementById("btnEnviar")
btn.type = 'button' //Retira a necessidade de colocar um tipo

//Criando uma tarefa sem a necessida do form
const tarefa = {
    nmTask: '',
    descTask: '',
    dtTask:'',
    task : function (nmTask,descTask,dtTask) {
        this.nmTask = nmTask
        this.descTask = descTask
        this.dtTask = dtTask
    }
}

//Adicionando evento tipo click no botão
btn.addEventListener("click", () => {

    // let nmTask = document.getElementById('nmTask').value
    // let descTask = document.getElementById('descTask').value
    // let dtTask = document.getElementById('dtTask').value

    //ou
    
    //Cria um array com todos os input, porém apenas aqueles com tipo "t"ext" e "date"
    let todosInput = document.querySelectorAll("input[type=text], input[type=date]")

    tarefa.task(todosInput[0].value, todosInput[1].value, todosInput[2].value)
    console.log(tarefa)



})


