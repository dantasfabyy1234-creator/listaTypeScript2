// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). 

// O sistema deve pedir para o operador cadastrar os usuários que estão na fila. 
// Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function questpoo17():void{

abstract class Usuario {
    private _id: number
    private _nome: string

    constructor(id:number, nome:string){
        this._id = id
        this._nome = nome
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    abstract exibirUsuario():void
}
class Aluno extends Usuario {
    private _curso: string
    
    constructor(id:number, nome:string, curso:string){
        super(id, nome)
        this._curso = curso
    }
    public get curso_1(): string {
        return this._curso
    }
    public set curso_1(value: string) {
        this._curso = value
    }
    exibirUsuario(): void {
        alert(`Dados do Aluno:
            -------
            Nome: ${this.nome} 
            Id: ${this.id} 
            Curso: ${this.curso_1}`)
    }
    }

class Servidor extends Usuario {
    private _departamento: string

    constructor(id:number, nome:string, departamento:string){
        super(id, nome)
        this._departamento = departamento
    }
    public get departamento(): string {
        return this._departamento
    }
    public set departamento(value: string) {
        this._departamento = value
    }
    exibirUsuario(): void {
        alert(`Dados do Servidor:
            -------
            Nome: ${this.nome} 
            Id: ${this.id} 
            Departamento: ${this.departamento}`)
    }
}

let ListaAlunos:Aluno[] = []
let nomeAluno:string, idAluno:number, curso:string

let ListaServidor:Servidor[] = []
let nomeServidor:string, idServidor:number, departamento:string

let opcao = 0

while(opcao != 3){
     alert(`Escolha um opção: 
        1 - Cadastrar Aluno
        2 - Cadastrar Servidor
        3 - Sair`)

    if(opcao == 1){
        nomeAluno = String(prompt("Informe seu nome: "))
        idAluno = Number(prompt("Digite seu código de identificação (ID): "))
        curso = String(prompt("Informe o seu curso "))

        let aluno:Aluno = new Aluno(idAluno,nomeAluno,curso)
        ListaAlunos.push(aluno)
    }
    else if(opcao == 2){
        nomeServidor = String(prompt("Informe seu nome: "))
        idServidor = Number(prompt("Digite seu código de identificação (ID): "))
         departamento = String(prompt("Informe o seu departamento: "))
        let servidor:Servidor = new Servidor(idServidor,nomeServidor,departamento)
        ListaServidor.push(servidor)
    }
    opcao = Number(prompt())
}
for(let i=0; i<ListaAlunos.length; i++){
    ListaAlunos[i].exibirUsuario()
}
}