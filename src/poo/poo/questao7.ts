// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome, cargo e salário. 
// Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

class Funcionario {
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    percentual(aumento:number): number{
        let valorAumento = (this.salario * aumento)/100
        this.salario = this.salario + valorAumento
        return this.salario
    }

}

let nomee:string = String(prompt("Informe o seu nome: "))
let cargo:string = String(prompt("Informe seu cargo: "))
let salario: number = Number(prompt("Informe salário atual:"))
let aumento: number = Number(prompt("Informe o valor de aumento do salário: "))

let funcionario = new Funcionario (nomee, cargo, salario)

alert(`Dados do cliente:
    --------
    nome: ${nomee}
    cargo: ${cargo}
    Salário atualizado: ${funcionario.percentual(aumento)}`)