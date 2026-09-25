// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o número da mesa e o valor dos ingredientes. 
// O Pedido de Entrega (Delivery) herda as propriedades do pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function questpoo20():void{

class Pedido {
    private _numeroDamesa: number 
    private _valorIngredientes: number 
   
    constructor(numeroMesa:number, valorIngrediente:number){
        this._numeroDamesa = numeroMesa
        this._valorIngredientes = valorIngrediente
    }
    public get numeroDemesa(): number {
        return this._numeroDamesa
    }
    public set numeroDemesa(value: number) {
        this._numeroDamesa = value
    }
     public get valorIngredientes(): number {
        return this._valorIngredientes
    }
    public set valorIngredientes(value: number) {
        this._valorIngredientes = value
    }
        faturamentoDiario(): number {
            return this._valorIngredientes
    }}
class PedidoDelivery extends Pedido {
    private _taxaEntrega: number 
    private _endereco: string
    

    constructor(taxaEntrega:number, endereco:string, numeroDaMesa:number, valorIngredientes:number){
        super(numeroDaMesa,valorIngredientes)
        this._taxaEntrega = taxaEntrega
        this._endereco = endereco
    }
    
    
    public get taxaEntrega(): number {
        return this._taxaEntrega
    }
    public set taxaEntrega(value: number) {
        this._taxaEntrega = value
    }
    public get endereco(): string {
        return this._endereco
    }
    public set endereco(value: string) {
        this._endereco = value
    }
    faturamentoDiario(): number {
    return this.valorIngredientes + this._taxaEntrega
    
}
}
let ListaPedidos:Pedido [] = []
let numeroDaMesa:number, valorIngrediente:number

let pedidoEstabelecimento:Pedido

let ListaPedidosDelivery:PedidoDelivery[] = []
let numeroDaMesaDElivery:number, taxaEntrega:number, endereco:string

let pedidoDelivery:PedidoDelivery

let opcao = 0

while(opcao != 3){
    opcao = Number(prompt(`Escolha um opção: 
        1 - Pedido no estabelecimento
        2 - Pedido Delivery
        3 - Sair`))

    if(opcao == 1){
        
        numeroDaMesa = Number(prompt("Informe o número da mesa: "))
        valorIngrediente = Number(prompt("Informe o valor dos ingredientes totais: "))

        pedidoEstabelecimento = new Pedido(numeroDaMesa, valorIngrediente)
        ListaPedidos.push(pedidoEstabelecimento)
        alert("Pedido cadastrado com sucesso!")

    }
    else if(opcao == 2){
        taxaEntrega = Number(prompt("Digite a taxa de entrega: "))
        endereco = String(prompt("Informe seu endereço: "))
        numeroDaMesaDElivery = Number(prompt("Informe o número da mesa: (OBS: DIGITE 1-DELIVERY)"))
        valorIngrediente = Number(prompt("Informe o valor dos ingredientes totais: "))

        pedidoDelivery = new PedidoDelivery(taxaEntrega, endereco, numeroDaMesaDElivery, valorIngrediente)
        ListaPedidosDelivery.push(pedidoDelivery)
        alert("Pedido cadastrado com sucesso!")

    }

}
let faturamentoTotal = 0
for(let i=0; ListaPedidos.length;i++  ){
    faturamentoTotal += ListaPedidos[i].faturamentoDiario()
}
alert(`Faturamento total da noite noite: R$${faturamentoTotal}`)

}




















































































