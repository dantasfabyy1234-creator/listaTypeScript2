// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

class Pessoa {
    nome: string;
    idade: number;
    peso: number;
    altura: number; 

    constructor(nome:string, idade:number, peso:number, altura:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    envelhecer(idade:number){
         let idadeAtual = idade + 1
         return idadeAtual
    }
    engordar(){

    }
    emagrecer(){

    }
    crescer(altura:number, idade: number):number{
        let alturaAtual = 0
        if(idade < 21){
            alturaAtual = altura + 0.5
        }
        return alturaAtual

    }
}
let nome:string = String(prompt("Informe seu nome: "))
let idade:number = Number(prompt("Informe sua idade: " ))
let peso:number = Number(prompt("Informe seu peso: "))
let altura:number = Number(prompt("Informe sua altura: "))

let Humano = new Pessoa (nome, idade, peso, altura)


alert(`Dados Pessoais:
    -------
    Nome: ${nome} 
    Idade: ${Humano.envelhecer(idade)} 
    Peso: ${peso}
    Altura: ${Humano.crescer(altura, idade)}`)

