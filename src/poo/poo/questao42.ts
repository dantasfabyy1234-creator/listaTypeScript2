
// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos.

//  O programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.
export function questpoo42():void{

class Medicamento {
    private _nome: string
    private _lote: number
    private _preco: number
    private _quant: number
   
    constructor(nome: string, lote:number, preco:number, quant:number){
        this._nome = nome
        this._lote = lote
        this._preco = preco
        this._quant = quant
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
     public get lote(): number {
        return this._lote
    }
    public set lote(value: number) {
        this._lote = value
    }
    public get preco(): number {
        return this._preco
    }
    public set preco(value: number) {
        this._preco = value
    }
     public get quant(): number {
        return this._quant
    }
    public set quant(quant:number) {
        if(quant < 0){
            quant = 0
        }
        else{
            this._quant = quant
        }
    }

    exibirMedicamento():void{
         alert(`Exibir Medicamento: 
            -----------------------
            nome: ${this.nome}}
            Lote: ${this.lote}
            Preco: ${this.preco}
            Quantidade: ${this.quant} `)
    }
    }

    let ListaMedicamento:Medicamento[] = []
    let nome:string, lote:number, quant:number, preco: number

    let medicamento:Medicamento

    let estoque:number = Number(prompt("Informe quantos produtos deseja cadastrar no estoque: "))

    if(estoque > 10){
        estoque = 10
    }

    for ( let i=0; i < estoque; i++){
        nome = String(prompt("Informe o nome do medicamento: "))
        lote = Number(prompt("Informe o lote: "))
        preco = Number(prompt("Informe o preço do medicamento: "))
        quant = Number(prompt("Informe a quantidade que deseja: "))

        medicamento = new Medicamento(nome, lote, preco, quant)
        ListaMedicamento.push(medicamento)

    }
    for (let i = 0; i < ListaMedicamento.length; i++) {

    if (ListaMedicamento[i].quant < 5) {
        ListaMedicamento[i].exibirMedicamento
    }
    }
}