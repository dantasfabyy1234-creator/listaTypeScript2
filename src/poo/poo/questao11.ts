// 11. Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


class Pedido{
    private _nomeCliente: string 
    private _nomePedido: string
    private _valor: number

    constructor(nomeCliente:string, nomePedido:string, valor:number){
        this._nomeCliente = nomeCliente
        this._nomePedido = nomePedido
        this._valor = valor
    }

    public get nomeCliente(): string {
        return this._nomeCliente
    }
    public set nomeCliente(value: string) {
        this._nomeCliente = value
    }
    public get nomePedido(): string {
        return this._nomePedido
    }
    public set nomePedido(value: string) {
        this._nomePedido = value
    }
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }

    exibirResumo(): void {
        alert(`RESUMO DO PEDIDO:
            -----
        Cliente: ${this.nomeCliente}
        Pedido: ${this.nomePedido}
        Valor total: R$ ${this.valor}`)
}
}

let nomeCliente:string = String(prompt("Informe o seu nome: "))
let nomePedido:string = String(prompt("Informe o seu nome do pedido: "))
let valor:number = Number(prompt("Informe o valor do pedido: "))

let cliente = new Pedido(nomeCliente, nomePedido, valor)

cliente.exibirResumo