// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function questpoo14():void{

class Livro {
    private _titulo: string
    private _autor: string
    private _anoPublicacao: number
    private _disponibilidade: boolean
    

    constructor(titulo:string, autor:string, anoPublicacao:number, disponibilidade:boolean){
        this._titulo = titulo
        this._autor = autor
        this._anoPublicacao = anoPublicacao
        this._disponibilidade = disponibilidade
    }

        public get titulo(): string {
        return this._titulo
    }
        public set titulo(value: string) {
        this._titulo = value
    }
        public get autor(): string {
        return this._autor
    }
        public set autor(value: string) {
        this._autor = value
    }
        public get anoPublicacao(): number {
        return this._anoPublicacao
    }
        public set anoPublicacao(value: number) {
        this._anoPublicacao = value
    }
        public get disponibilidade(): boolean {
        return this._disponibilidade
    }
        public set disponibilidade(value: boolean) {
        this._disponibilidade = value
    }

    public listarLivros():void {
        alert(`Dados do livro:
            -------
            livro: ${this._titulo} 
            Autor: ${this._autor} 
            Ano: ${this._anoPublicacao}
            Disponibilidade: ${this._disponibilidade}`)
    }
}

let listarLivro:Livro[]=[]
let quantidade:number = 0
let titulo:string, autor:string, ano:number, disponibilidade:string
let disp:boolean
let novoLivro:Livro  

quantidade = Number(prompt("Informe quantos livros será cadastrado: "))

for(let i=0; i<= quantidade; i++){
    titulo = String(prompt("Informe o título do livro: "))
    autor = String(prompt("Informe o nome do autor: "))
    ano = Number(prompt("Informe o ano: "))
    disponibilidade = String(prompt("Informe se o livro está disponível S-sim || N-não ")).toUpperCase()

    if(disponibilidade == "S"){
        disp = true
    }
    else{
        disp = false
    }
    novoLivro = new Livro(titulo, autor, ano, disp) 
    listarLivro.push(novoLivro)
}
for(let i=0; i<=listarLivro.length; i++){
    listarLivro[i].listarLivros()
}

}