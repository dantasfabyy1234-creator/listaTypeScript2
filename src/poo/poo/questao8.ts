// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

class Funcionario {
    nome:string
    cargo:string
    salario:number

    constructor (nome:string, cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    exibirResumo(){
       alert(`RESUMO:
        -----
        Nome: ${this.nome}
        Cargo: ${this.cargo}
        Salário: ${this.salario}`)
    }
}

let listaFuncioario:Funcionario[]=[]
let novoFuncionario:Funcionario

let entrada:string = String(prompt("Seja bem-vindo ao programa, Para cadastrar outro funcionário digite: S-sim e N-não")).toUpperCase()

while(entrada == "S"){
    let nome: string = String(prompt("Informe seu nome: "))
    let cargo: string = String(prompt("Informe seu cargo: "))
    let salario:number = Number(prompt("Informe seu salário: "))

    novoFuncionario = new Funcionario(nome, cargo, salario)

    listaFuncioario.push(novoFuncionario)
    

    entrada = String(prompt("Seja bem-vindo ao programa, Para cadastrar outro funcionário digite: S-sim e N-não")).toUpperCase()
}
for(let i=0; listaFuncioario.length; i++){
    listaFuncioario[i].exibirResumo()
}
