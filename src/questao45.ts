// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo.
// O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.

class UsuarioSistema {
    private _login: string
    private _senha:string

    constructor(login:string, senha:string){
        this._login = login
        this._senha = senha
    }

    public get login(): string {
        return this._login
    }
    public set login(value: string) {
        this._login = value
    }
    public get senha(): string {
        return this._senha
    }
    public set senha(value: string) {
        this._senha = value
    }

    verificarSenha():void{
        if(this.senha == this.login){
            alert("Erro: o programa não permite que a senha e o login seja iguais!")
        }
        if(this.senha.length <= 6){
            alert("Erro: o a senha não pode ter menos que 6 caracteres!")

        }
    }
}

let senha:string, login:string

let usuario:UsuarioSistema
let opcao = 0 

while(opcao != 2 ) {
    opcao = Number(prompt(`Escolha um opção: 
        1 - Cadastrar usuário
        2 - sair `))


        login = String(prompt("Digite seu login:"))
        senha = String(prompt("Digite sua senha: "))

        usuario = new UsuarioSistema(login, senha)

        usuario.verificarSenha()

}
