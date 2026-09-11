// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. 
// 
//O sistema deve cadastrar animais, listar por tipo (Mamíferos ou Aves) e simular a hora da alimentação&#39; chamando o método de 
//som de cada um.

abstract class Zoologico {
    private _nome: string
    private _especie: string
    private _idade: number
    private _sexo: string

    constructor(nome: string, especie: string, idade: number, sexo: string) {
        this._nome = nome
        this._especie = especie
        this._idade = idade
        this._sexo = sexo
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get especie(): string {
        return this._especie
    }
    public set especie(value: string) {
        this._especie = value
    }
    public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }

    abstract emitirsom(): void
    abstract mover(): void
}

class Mamiferos extends Zoologico {
    private _tipoDeAlimentacao: string
    

    constructor(nome:string, especie:string, idade:number, sexo:string, tipoDeAlimentacao:string){
        super(nome, especie,idade, sexo)
        this._tipoDeAlimentacao = tipoDeAlimentacao
    }

    public get tipoDeAlimentacao(): string {
        return this._tipoDeAlimentacao
    }
    public set tipoDeAlimentacao(value: string) {
        this._tipoDeAlimentacao = value
    }

    // POLIMORFISMO
    emitirsom(): void {
        alert(`${this.nome} está emitindo um som de mamífero.`)
    }

    mover(): void {
        alert(`${this.nome} está andando.`)
    }
}
class Aves extends Zoologico {
    private _SeSaoMigratorias: string

    constructor(nome:string, especie:string, idade:number, sexo:string, SeSaoMigratorias:string){
        super(nome, especie,idade, sexo)
        this._SeSaoMigratorias = SeSaoMigratorias
    }

    public get SeSaoMigratorias(): string {
        return this._SeSaoMigratorias
    }
    public set SeSaoMigratorias(value: string) {
        this._SeSaoMigratorias = value
    }

    emitirsom(): void {
        alert(`${this.nome} está cantando`)
    }
    mover(): void {
        alert(`${this.nome} está voando`)
    }
}
 let listaMamiferos:Mamiferos[] = []
 let nomeMamifero:string, especieMamifero:string, idadeMamifero:number, sexoMamifero:string, tipoDeAlimentacaoMamifero:string

 let listaAves:Aves[] = []
 let nomeAves:string, especieAves:string, idadeAves:number, sexoAves:string, seSaoMigratorias:string
    
 let continuar:string = "S"
 while(continuar == "S"){
    alert("CADASTRANDO ANIMAL MAMÍFERO...")
    nomeMamifero = String(prompt("Informe o nome do animal: "))
    especieMamifero = String(prompt("Informe a espécie: "))
    idadeMamifero = Number(prompt("Digite a idade do animal: "))
    sexoMamifero = String(prompt("Informe o sexo do animal, sendo: F-fêmea | M-macho")).toUpperCase()
    tipoDeAlimentacaoMamifero = String(prompt("Informe o tipo de alimentação do seu mamífero: "))

    let mamiferos = new Mamiferos (nomeMamifero, especieMamifero, idadeMamifero, sexoMamifero, tipoDeAlimentacaoMamifero)

    listaMamiferos.push(mamiferos)

    alert("CADASTRANDO AVE...")
    nomeAves = String(prompt("Informe o nome do animal: "))
    especieAves = String(prompt("Informe a espécie: "))
    idadeAves = Number(prompt("Digite a idade do animal: "))
    sexoAves = String(prompt("Informe o sexo do animal, sendo: F-fêmea | M-macho")).toUpperCase()
    seSaoMigratorias = String(prompt("O animal é migrátorio?, digite: S-sim | N-não")).toUpperCase()

    let aves = new Aves (nomeAves, especieAves, idadeAves, sexoAves, seSaoMigratorias)

    listaAves.push(aves)

    continuar = String(prompt("Deseja cadastrar mais animais? S-sim | N-não")).toUpperCase()

 } 
            