//console.log() - o console dá saida em informações no console do navegador!
console.log('Hello world')


const btn = document.querySelector('button');



btn.addEventListener("click", () =>{
    // alert(`Resultado: ${minhafuncao()}`)

    let inputTask = document.querySelectorAll("input")
    
    inputTask[2].value += btn.innerText
})





const minhafuncao = () => {
    
    let a = 10;
    let b = 10;
    return (a + b + c)
}
