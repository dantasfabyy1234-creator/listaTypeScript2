// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade

export function questpoo10():void{

class Bichinho {
    nome:string
    fome:number
    saude:number
    idade:number
    
    constructor(nome:string, fome:number, saude:number, idade:number){
        this.nome = nome
        this.fome = fome
        this.saude = saude 
        this.idade = idade
    }

    alterarNome(novoNome:string):string{
        this.nome = novoNome
        return this.nome
    }
    alterarFome(novaFome:number):number{
        this.fome = novaFome
        return this.fome
    }
    alterarsaude(novaSaude:number):number{
        this.saude = novaSaude
        return this.saude
    }
    alterarIdade(novaIdade:number):number{
        this.idade = novaIdade
        return this.idade
    }

}

let nome:string = String(prompt("Informe o nome do seu bichinho: "))
let fome:number = Number(prompt("Informe de 0/100 quando de fome seu bichinho está: "))
let saude:number = Number(prompt("Informe de 0/100 quando de saúde seu bichinho está: "))
let idade:number = Number(prompt("Informe a idade do seu bichinho: : "))

let animal = new Bichinho(nome, fome, saude, idade)

let novoNome:string 
let novaFome:number, novaSaude:number, novaIdade:number

let opcao = 0

while(opcao != 5){
     alert(`Escolha um opção: 
        1 - Alterar nome
        2 - Aterar fome
        3 - Alterar saude 
        4 - Alterar idade
        5 - sair`)

    opcao = Number(prompt())

    if(opcao == 1){
        novoNome = String(prompt("Informe o nome atual que deseja:"))

        animal.alterarNome(novoNome)

        alert(`Nome alterado com sucesso!
            Novo nome: ${animal.nome}`)
    }
    else if(opcao == 2){
        novaFome = Number(prompt("Informe de 0/100 a nova fome: "))

        animal.alterarFome(novaFome)

        alert(`Fome alterado com sucesso!
            Nova Fome: ${animal.fome}`)
    }
    else if(opcao == 3){
        novaSaude = Number(prompt("Informe de 0/100 a nova saúde: "))

        animal.alterarsaude(novaSaude)

        alert(`Saúde alterado com sucesso!
            Nova Saúde: ${animal.saude}`)
    }
    else if(opcao == 4){
        novaIdade = Number(prompt("Informe a nova idade do seu bichinho: "))

        animal.alterarIdade(idade)

        alert(`Idade alterada com sucesso!
            Nova idade: ${animal.idade}`)
    }
    else if(opcao == 5 ){
        alert("saindo...")
        break
    }
    else{
        alert("OPÇÃO INVÁLIDA!")
    }
}
}



