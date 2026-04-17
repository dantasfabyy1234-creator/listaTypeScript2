"use strict";
// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
let numero = Number(prompt("Digite um numero: "));
if (numero % 2 == 0) {
    console.log("Número é par");
}
else {
    console.log("Número é impar");
}
if (numero > 0) {
    console.log("O número é positivo");
}
else {
    console.log("O número é negativo");
}
