function ex10(){
    let nome = prompt("Digite o nome do funcionário: ");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto: "));
    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

    console.log("Nome: " + nome);
    console.log("Salário bruto: R$" + salarioBruto);
    console.log("Desconto do INSS: R$" +descontoINSS);
    console.log("Salário líquido: R$" + salarioLiquido);
}