// console.log("Olá mundo.")
// document.write("Olá mundo!")


const btn = document.getElementById("btnEnviar")

// function msg(){ alert("CLIQUEI")}

btn.addEventListener("click", () =>{
//   alert(`Resultado: ${minhaFuncao()}`)  
    let inputTask = document.querySelectorAll("input")
    inputTask[2].value = btn.innerText
})

const minhaFuncao = () =>{
    let a = 10
    let b = 10
    return(a + b)
}