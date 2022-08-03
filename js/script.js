// Elementos
const inputName = document.getElementById('nmTaskId')
const inputDate = document.getElementById('dtTask').innerHTML
const inputDesc = document.getElementById("").innerHTML
const btn = document.getElementById('btnEnviar')

// Listeners
const submitBtn = btn.addEventListener('click', () =>{
    // alert('Acorda Infeliz')
    let inputTask = document.querySelectorAll('input')

    inputTask[2].value = btn.innerHTML 
})


// criar objeto (keys + values) e console.log()
