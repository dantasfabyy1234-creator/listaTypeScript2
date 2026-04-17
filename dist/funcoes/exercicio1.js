"use strict";
// Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
let soma = 0;
function somarArte(numero2) {
    for (let i = 1; i <= numero2; i++) {
        soma = soma + i;
    }
    console.log(`Soma: ${soma}`);
}
let numero2 = Number(prompt("Informe um número: "));
somarArte(numero2);
