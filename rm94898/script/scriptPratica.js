const caneta = {
    ponta: 0.2,
    cor: "azul",
    marca: "bic",
    tampada: true,

    destampar: () =>{
        if(tampada){
            alert("Destampou a caneta")
        }else{
            tampada = false;
            alert("A caneta ja está destampada")
        }
    },
    escrever: () =>{
        if(tampada){
            alert("Caneta está tampada, impossivel escrever, destampe primeiro")
        }else{
            alert("Estou escrevendo")
        }
    }
}

console.log(caneta)