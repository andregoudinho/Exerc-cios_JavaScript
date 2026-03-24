function ex07() {
    let codigo = prompt("Digite o códito do picolé que deseja(a até i):");

    let sabor;
    let preco;
    

    switch (codigo) {
        case "a":
            sabor = "chocolate";
            preco = 1.50;
            break;
        case "b":
            sabor = "morango";
            preco = 2.50;
            break;
        case "c":
            sabor = "creme";
            preco = 2.50;
            break;
        case "d":
            sabor = "manga";
            preco = 3.20;
            break;
        case "e":
            sabor = "melancia";
            preco = 3.40;
            break;
        case "f":
            sabor = "vanilla ice";
            preco = 3.00;
            break;
        case "g":
            sabor = "céu azul";
            preco = 3.60;
            break;
        case "h":
            sabor = "brownie";
            preco = 4.00;
            break;
        case "i":
            sabor = "hawaiano";
            preco = 5.00;
            break;
        default:
            alert("Código inválido");
    }

    if (preco !== undefined) {
        alert("O picolé que deseja é: " + sabor + ", e seu preço é: R$" + preco.toFixed(2));
    }
}
