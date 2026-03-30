function ex11(){
let salario = parseFloat(prompt("Digite o salário: "));
let taxa;

if (salario <= 1000){
    taxa = 0.08;
}else if(salario <= 1500){
    taxa = 0.085;
}else{
    taxa = 0.09;
}

let desconto = salario * taxa;
let salarioLiquido = salario - desconto;

console.log("Salário informado: R$" + salario.toFixed(2));
console.log("Taxa de desconto: R$" + (taxa * 100) + "%");
console.log("Valor do deconto: R$" + desconto.toFixed(2));
console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));
}
