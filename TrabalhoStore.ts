let askk = require('readline-sync')

class Product{
    nome: string
    marca: string
    tipo: string
    preco: number
    precoCusto: number | string

    
    //testar sem colocar no constructor
    getProduct(): void{
        this.marca = askk.question('System: Qual a marca dele? ')
        this.tipo = askk.question('System: Como voce classificaria esse produto? ')
        this.preco = askk.question('System: Qual o preco unitario dele? ')
        this.precoCusto = askk.question('System: Voce sabe o preco de custo dele? Caso nao saiba, digite 0')

        if(this.precoCusto == '0'){
            this.precoCusto = 'Nao informado.'
        }
    }
    constructor(nome: string){
        this.nome = nome
    }
}
class Sell{
    numDeVenda: number
    product: Product
    quantidade: number
    valorTotal: number
    data: string

    constructor(numDeVenda: number, product: Product, quantidade: number, data: string){
        this.numDeVenda = numDeVenda
        this.product = product
        this.quantidade = quantidade
        this.valorTotal = this.setPrecoVenda()
        this.data = data
    }



    setPrecoVenda(): number{
        return this.valorTotal * this.quantidade
    }

    aplDesc(): void{
        let porDesc = Number(askk.question('Quantos % de desconto, para me ajudar, por favor digite apenas o numero...: ')) / 100
        let valorDesc = porDesc * this.valorTotal

        this.valorTotal -= valorDesc
    }

}

//Product --> nome, marca, tipo, preco, precoCusto
//Sell --> numDeVenda, produto, quantidade, valor total

let produtoTV = new Product('TV Philco 42 Polegadas')

let venda1 = new Sell(1, produtoTV, 2, '27/06/2024')
