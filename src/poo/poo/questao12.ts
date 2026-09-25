// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function questpoo12():void{

class Locadora {
    private _modeloDoCarro: string
    private _valorDiaria: number
    private _quantDiasAlugar: number
    
    constructor(modelo:string, valorDiaria:number, quantDias:number){
        this._modeloDoCarro = modelo
        this._valorDiaria = valorDiaria
        this._quantDiasAlugar = quantDias
    }

    public get modeloDoCarro(): string {
        return this._modeloDoCarro
    }
    public set modeloDoCarro(value: string) {
        this._modeloDoCarro = value
    }
    public get valorDiaria(): number {
        return this._valorDiaria
    }
    public set valorDiaria(value: number) {
        this._valorDiaria = value
    }
    public get quantDiasAlugar(): number {
        return this._quantDiasAlugar
    }
    public set quantDiasAlugar(value: number) {
        this._quantDiasAlugar = value
    }
    
    valorTotalAluguel(valorDiaria:number, quantDias:number){
        let valorTotal = valorDiaria * quantDias
        return valorTotal
    }
     exibirResumo(): void {
        alert(`RESUMO DA LOCAÇÃO:
            -----
            Modelo: ${this.modeloDoCarro}
            Valor da diária: R$ ${this.valorDiaria}
            Quantidade de dias: ${this.quantDiasAlugar}
            Valor total: R$ ${this.valorTotalAluguel(this.valorDiaria, this.quantDiasAlugar)}`)

}
}

let entrada:string = "S"

while(entrada == "S"){
    let modeloDoCarro:string = String(prompt("Informe o modelo do carro que deseja: "))
    let valorDiaria:number = Number(prompt("Informe o valor da diária; "))
    let quantDias:number = Number(prompt("Informe a quantidade de dias que dseja:"))

    let carro = new Locadora(modeloDoCarro, valorDiaria, quantDias)
    carro.exibirResumo()

    entrada = String(prompt("deseja fazer uma nova locação: digite S-sim | N-não")).toLocaleUpperCase()

}
}