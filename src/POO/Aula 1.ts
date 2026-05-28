class Funcionario {
    //atributo
    nome: string;
    cargo: string;
    salario:number;
    //construtor
    constructor(n: string, c:string, s:number) {
        this.nome = n;
        this.cargo = c;
        this.salario = s;
    
    }
    //metodo
    exibirResumo(): void{
        console.log(`Funcionario: ${this.nome} | cargo: ${this.cargo} |
        Cargo: ${this.cargo} | Salario: ${this.salario} `)
    }
}
let continuar:string = ""
while(continuar != "N"){
    let n:string, c:string, s:number
    n = String(prompt("Informe o nome do Funcionário: "))
    c = String(prompt("Informe se cargo: "))
    s = Number(prompt("Informe o seu salário: "))

    let novoFunc = new Funcionario(n,c,s)

    novoFunc.exibirResumo()
    continuar = String(prompt("Deseja continuar? S-sim N-nao")).toUpperCase()
}