// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
export function runQuestao2Condicional() {
    let soma = 0, subtracao = 0, multiplicacao = 0, divisao = 0;
    let nub1 = Number(prompt("Informe seu primeiro número: "));
    let nub2 = Number(prompt("Informe seu segundo número: "));
    let op = Number(prompt(`1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão`));
    if (op === 1) {
        soma = nub1 + nub2;
        console.log("Sua soma é" + soma);
    }
    else if (op === 2) {
        subtracao = nub1 - nub2;
        console.log("Sua subtração é " + subtracao);
    }
    else if (op === 3) {
        multiplicacao = nub1 * nub2;
        console.log("Sua multiplicação é " + multiplicacao);
    }
    else if (op === 4) {
        divisao = nub1 / nub2;
        console.log("Sua divisão é " + divisao);
    }
}
