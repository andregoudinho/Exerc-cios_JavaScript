function ex05(){

    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero %2===0){
        numero++;
        console.log("O número era par e foi transformado em ímpar: ", numero)
    } else {
        numero = numero -1;
        console.log("O número era ímpar e foi tranformado em par: ", numero)
    }
}