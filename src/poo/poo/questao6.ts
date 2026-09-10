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
    saque(valorSaq: number): number{
        
        if(valorSaq > this.saldo){
            alert("SALDO INSUFICIENTE!")
        }
        else{
            this.saldo = this.saldo - valorSaq
        }
        return this.saldo
    }
}

let numeroDaConta:number = Number(prompt("informe o número da sua conta correte: "))
let nomeCliente:string = String(prompt("Informe o seu nome: "))

let conta = new Conta(numeroDaConta, nomeCliente)

let opcao = 0
while(opcao != 4){
    alert(`Escolha um opção: 
        1 - Alterar nome
        2 - Fazer Depósito
        3 - Fazer Saque 
        4 - sair`)

    opcao = Number(prompt())

    let novoNome:string, valorDeposito:number, valorSaque:number

    if(opcao == 1){
        novoNome = String(prompt("Informe o nome atual que deseja:"))

        conta.alterarNome(novoNome)

        alert(`Nome alterado com sucesso!
            Novo nome: ${conta.nome}`)
    }
    else if(opcao == 2){
        valorDeposito = Number(prompt("Informe o valor que deseja depositar na conta: "))

        conta.deposito(valorDeposito)

        alert(`Depósito realizado com sucesso!
            Saldo atual: ${conta.saldo}`)
    }
    else if(opcao == 3){
        valorSaque = Number(prompt("Informe o valor do saque: "))

        let result = conta.saque(valorSaque)

        if(result > 0){
            alert(`Saque realizado com sucesso!
            Saldo atual: ${conta.saldo}`)
        }
        

    }
    else if(opcao == 4 ){
        alert("saindo...")
        break
    }
    else{
        alert("OPÇÃO INVÁLIDA!")
    }
}