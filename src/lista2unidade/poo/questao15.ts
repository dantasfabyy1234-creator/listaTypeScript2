// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionario como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

abstract class Funcionario{
    nome:string

    constructor(nome:string){
        this.nome = nome
    }

    abstract calcularSalario():number

    exibirSalario():void{
        console.log(`O nome é ${this.nome} e o salario e ${this.calcularSalario()}`)
    }
    
}

class FuncionarioAssalariado extends Funcionario{
    salarioFixo: number

    constructor(nome:string, salarioFixo:number){
        super(nome)
        this.salarioFixo = salarioFixo
    }

    calcularSalario():number{
        return this.salarioFixo + 500
    }
    
}

class FuncionarioHorista extends Funcionario{
    valorporHora:number
    quantHoras:number

    constructor(nome:string, valorporHora:number, quantHoras:number ){
        super(nome)
        this.valorporHora = valorporHora
        this.quantHoras = quantHoras
        
    }
    calcularSalario():number{
        let salarioFinal = this.valorporHora * this.quantHoras
        return salarioFinal
    }
}

let nomeFuncASS:string =""
let salarioFixoFuncASS:number = 0

let nomeFuncHora:string
let valorporHora: number
let quantHoras: number
let funcionarioASS:FuncionarioAssalariado

let TipoFuncionario:number = Number(prompt("Informe o tipo de Funcionario que você é, sendo: 1-assalariado e 2-horista"))


    if(TipoFuncionario==1){
       nomeFuncASS = String(prompt("Informe seu nome: "))
        salarioFixoFuncASS = Number(prompt("Informe seu salario fixo: "))
        
    }
    else{
       nomeFuncHora = String(prompt("Informe seu nome: "))
       valorporHora = Number(prompt("Informe quanto você recebe por hora: "))
       quantHoras = Number(prompt("Informe a quantidade de horas trabalhadas: "))
    }

    funcionarioASS = new FuncionarioAssalariado(nomeFuncASS,salarioFixoFuncASS ) //criandoo objeto
funcionarioASS.exibirSalario()
