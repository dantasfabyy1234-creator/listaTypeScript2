// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo.
//  Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

class Conta {
    numero: number;
    nome: string;
    saldo = 0

    constructor(numDaConta: number, nome:string){
        this.numero = numDaConta
        this.nome = nome
        
    }

    alterarNome(novoNome:string){
      this.nome = novoNome
    }
    deposito(valorDep: number){
        this.saldo = this.saldo + valorDep

    }
    saque(valorSaq: number){
        this.saldo = this.saldo - valorSaq
    }
}

let numeroDaConta:number = Number(prompt("informe o número da sua conta correte: "))
let nomeCliente:string = String(prompt("Informe o seu nome: "))


alert(`Escolha um opção: 
    1 - Alterar nome
    2 - Fazer Depósito
    3 - Fazer Saque `)

let opcao: number = Number(prompt())
    
if(op == 1){
    

}