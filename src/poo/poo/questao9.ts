// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

class Estoque {
    nomeProduto:string
    preco:number
    quantidade:number

    constructor(nomeProduto:string, preco:number, quantidade:number){
        this.nomeProduto = nomeProduto
        this.preco = preco
        this.quantidade = quantidade
    }

    ValorTotalEstoque(preco:number, quantidade:number):number{
        let valorDoEstoque = preco * quantidade
        return valorDoEstoque
    }
}

let nomeProduto:string = String(prompt("Informe o nome do Produto: "))
let preco:number = Number(prompt("Informe o preço do produto: "))
let quantidadeEstoque:number = Number(prompt("Digite a quantidade de produtos em estoque:  "))

let produto = new Estoque(nomeProduto, preco, quantidadeEstoque )

alert(`DADOS DO PRODUTO:
        -----
        Nome do produto: ${nomeProduto}
        preço: ${preco}
        Quantidade de produtos em estoque: ${quantidadeEstoque}
        -----
        Valor total em estoque: ${produto.ValorTotalEstoque(preco, quantidadeEstoque)}`)