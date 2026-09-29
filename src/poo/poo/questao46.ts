// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis. Crie a classe Imovel com os atributos
// privados codigo, valorAluguel e diasAtraso. Crie um método público
// calcularValorComMulta(): number que aplica uma multa de 2% sobre o valor do aluguel mais R$5,00 por dia de atraso (caso haja atraso). 
// O sistema deve permitir que o corretor digite os dados do
// imóvel e os dias de atraso do inquilino em um menu repetitivo. Após cada digitação, o programa
// exibe o valor atualizado da cobrança. O laço se encerra quando o usuário informar o código 0.

export function questpoo46():void{

class Imovel {
    private _codigo: number
    private _valorAluguel: number
    private _diasAtraso: number
    
    constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
        this._codigo = codigo
        this._valorAluguel = valorAluguel
        this._diasAtraso = diasAtraso
    }
    public get codigo(): number {
        return this._codigo
    }
    public set codigo(value: number) {
        this._codigo = value
    }
    public get valorAluguel(): number {
        return this._valorAluguel
    }
    public set valorAluguel(value: number) {
        this._valorAluguel = value
    }
    public get diasAtraso(): number {
        return this._diasAtraso
    }
    public set diasAtraso(value: number) {
        this._diasAtraso = value
    }

    calcularValorComMulta(): number {
        let valorAtualizado: number = this.valorAluguel

        if (this.diasAtraso > 0) {
            valorAtualizado = this.valorAluguel + (this.valorAluguel * 0.02) + (this.diasAtraso * 5)
        }
            return valorAtualizado
        }
    }
 
let codigo:number, valorAluguel:number, diasAtraso:number, valorAtualizado
let imovel: Imovel
let op = 0
    while (op != 2) {
        codigo = Number(prompt("Digite o código do imóvel: "))
        valorAluguel = Number(prompt(`Insira o valor do aluguel: `))
        diasAtraso = Number(prompt(`Insira a quantidade de dias de atraso: `))

        imovel = new Imovel(codigo, valorAluguel, diasAtraso)

        valorAtualizado = imovel.calcularValorComMulta()

        alert(`Código do imóvel: ${imovel.codigo} 
               Valor do aluguel: R$${imovel.valorAluguel.toFixed(2)} 
               Dias de atraso: ${imovel.diasAtraso} 
               Valor atualizado: R$${valorAtualizado.toFixed(2)}`)

        op = Number(prompt(`Digite 1-continuar ou 2-ecerrar: `))
    }
}