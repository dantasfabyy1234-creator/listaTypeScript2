// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function questpoo13():void{

class Aluno {
    private _nome: string
    private _nota1: number
    private _nota2: number
    
    constructor(nome:string, nota1:number, nota2:number){
        this._nome = nome
        this._nota1 = nota1
        this._nota2 = nota2
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get nota1(): number {
        return this._nota1
    }
    public set nota1(value: number) {
        this._nota1 = value
    }
    public get nota2(): number {
        return this._nota2
    }
    public set nota2(value: number) {
        this._nota2 = value
    }

    calcularMedia(nota1:number, nota2:number){
        let calculoMedia = (nota1 + nota2) /2

        if(calculoMedia >=7){
            alert("APROVADO")
        }
        else{
            alert("REPROVADO")
        }
    }       
}

let aluno:Aluno
let nome:string, nota1:number, nota2:number

let entrada = "S"

while(entrada == "S"){
    nome = String(prompt("Informe o seu nome: "))
    nota1 = Number(prompt("Informe uma primeira nota: "))
    nota2 = Number(prompt("Informe uma segunda nota: "))

    aluno = new Aluno (nome, nota1, nota2)

    aluno.calcularMedia(nota1, nota2)
    
    entrada = String(prompt("Deseja cadastrar outro aluno?, digite: S-sim e N-não "))
}
}