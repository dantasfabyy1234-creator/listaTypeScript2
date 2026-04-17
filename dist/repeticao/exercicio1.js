"use strict";
// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
let num = 1, contador = 0, Soma = 0;
while (num != 0) {
    num = Number(prompt("Digite um números (0 para sair):"));
    contador++;
    Soma = Soma + num;
}
console.log("Quantidades de número digitados ", contador);
console.log("A somas total é ", Soma);
