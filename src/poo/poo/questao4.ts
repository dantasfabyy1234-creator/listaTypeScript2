// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

class Retangulo{
    comprimento: number;
    largura: number

    constructor(altura:number, base:number){
        this.comprimento = altura
        this.largura = base
    }
    calcularArea(comprimento:number, largura:number){
        let calculoArea = this.comprimento * this.largura
    }
    calcularPerimetro(comprimento:number, largura:number){
        let calculoPerimetro = (this.comprimento + this.largura)*2
    }

}

let comprimento:number = Number(prompt("Informe o valor do comprimento: "))
let largura:number = Number(prompt("Informe o valor da largura: "))

let local = new Retangulo(comprimento, largura)

alert(`Medidas do loacal:
    Comprimento: ${comprimento} m
    Largura: ${largura} m
    -------
    Quantidade de pisos necessário: ${local.calcularArea(comprimento,largura)}
    Quantidade de Rodapes necessário: ${local.calcularPerimetro}`)
