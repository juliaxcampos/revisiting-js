//Revisão básica de função
var total;

function soma (valor1, valor2) {
    return valor1 + valor2;
};

function realParaDolar (valorReal, cotacaoDolar) {
    total =valorReal * cotacaoDolar;
    alert("O valor em real é R$ " + valorReal + " e o valor em U$ é " + total);
};