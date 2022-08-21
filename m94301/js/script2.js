


const btn = document.getElementById("btnEnviar")

btn.addEventListener("click", () => {
    let todosInput = document.querySelectorAll("input")
    let campoVazio = 0

    for (i = 0; i < todosInput.length; i++) {
        if (todosInput[i].value == "") {
            campoVazio++

        }
        //todosInput[i].value = "a";
    }

    if (campoVazio >= 1){
    alert("Preencha todos os campos!" + campoVazio)
    } else {
        alert("Tudo certo!")
        for (i = 0; i < todosInput.length; i++) {
            alert(todosInput[i].value)
        }
    }

})
