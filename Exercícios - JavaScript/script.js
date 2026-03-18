function somarNumeros () {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número(ou digite 0 para finalizar): "));
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, digite um número válido!");
        }
        continuar = confirm("Deseja adicionar mais números?");
    }
    alert ("A soma dos números é: " + soma)
}

function contagemRegressiva () {
    let i = 10;

    while (i >= 0){
        alert(i);
        i--;
    }
   
    alert("Lançamento realizado!");
        
}