// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1:number = Number(prompt("Informe o primeiro valor: "))
let valor2:number = Number(prompt("Informe um segundo valor: "))

if(valor1 == valor2){
    alert("Números iguais")
}
else if(valor1 > valor2){
    alert("Primeiro é maior")
}
else{
    alert("Segundo é maior")
}