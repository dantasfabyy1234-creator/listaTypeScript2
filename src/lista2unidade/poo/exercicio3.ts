// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos: Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

class Retangulo{
    comprimento: number;
    largura: number

    constructor(altura:number, base:number){
        this.comprimento = altura
        this.largura = base
    }

    mudarValorDosLados(novoValorComprimento:number, novoValorLargura: number){
        this.comprimento = novoValorComprimento
        this.largura = novoValorLargura
    }
    retornarvalor(){
        console.log(`o novo valor dos lados são: comprimento: ${this.comprimento} | Largura: ${this.largura}  `)
    }
    calcularArea(comprimento:number, largura:number){
        let calculoArea = this.comprimento * this.largura
    }
    calcularPerimetro(comprimento:number, largura:number){
        let calculoPerimetro = (this.comprimento + this.largura)*2
    }

}