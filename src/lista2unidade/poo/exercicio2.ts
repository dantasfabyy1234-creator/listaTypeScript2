// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class Quadrado{
    tamanhoLado: number;

    constructor(lado:number){
        this.tamanhoLado = lado
    }

    mudarValorDoLado(novoValor:number):number{
        this.tamanhoLado = novoValor
        return novoValor
}
    calcularArea(tamanhoLado:number):any{
       let calculoArea = tamanhoLado * tamanhoLado
       console.log("O valor da área é: "+calculoArea)
    }
}




