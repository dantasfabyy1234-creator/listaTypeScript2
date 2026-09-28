// 30. O Sistema de Bilhetagem de Transporte Intermunicipal

// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor base). 

// O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

class Passagem {
    private _nome: string
    private _cpf: number
    private _valorBase =  0

    constructor(nome:string, cpf:number){
        this._nome = nome
        this._cpf = cpf
        
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get cpf(): number {
        return this._cpf
    }
    public set cpf(value: number) {
        this._cpf = value
    }
    public get valorBase(): number {
        return this._valorBase
    }
    public set valorBase(value: number) {
        this._valorBase = value
    }

    calcularValor():number {}
    relatorio():void{}
    
}
class PassagemComum extends Passagem{
        calcularValor():number {
            return this.valorBase
        }

    relatorio(): void {
        alert(`Dados da Passagem comum:
            -------
            Nome: ${this.nome} 
            Cpf: ${this.cpf}
            Valor: R$ ${this.valorBase} `)
    }
}
class PassagemEstudantil extends Passagem{
    calcularValor():number{
        return this.valorBase * 0.5
    }
     relatorio(): void {
            alert(`Dados da Passagem Estudantil:
            -------
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Valor com desconto: R$ ${this.desconto()}`)
        }
}

let ListaPassagem:Passagem[]=[]

let nome:string, cpf:number, valorBase = 50
let passagemComum: Passagem
let passagemEstudantil:PassagemEstudantil

let opcao = 0

while(opcao != 3){
    opcao = Number(prompt(`Informe o tipo de passagem: 
        1 - Passagem comum
        2 - Passagem Estudantil
        3 - Sair`))

        if(opcao == 1){
            nome = String(prompt("Informe seu nome: "))
            cpf = Number(prompt("Digite seu cpf: "))

            passagemComum = new Passagem(nome,cpf)
            ListaPassagem.push(passagemComum)
        }
        else if (opcao == 2) {

            let nome = String(prompt("Informe seu nome: "))
            let cpf = Number(prompt("Digite seu CPF: "))

            passagemEstudantil = new PassagemEstudantil(nome, cpf)
            ListaPassagem.push(passagemEstudantil)
}
}
let faturamentoTotal = 0

for (let i = 0; i < ListaPassagem.length; i++) {
    ListaPassagem[i].relatorio()
}
    
    for(let i=0; ListaPassagem.length;i++  ){
        faturamentoTotal += ListaPassagem[i].faturamentoDiario()
    }
    alert(`Faturamento total da noite noite: R$${faturamentoTotal}`)
