let askk = require('readline-sync')

class Product{
    id: number
    nome: string
    marca: string
    preco: number
    precoCusto: number | string

    constructor(id: number, nome: string, marca: string, preco: number, precoCusto: number | string){
        this.id = id
        this.nome = nome
        this.marca = marca
        this.preco = preco
        this.precoCusto = precoCusto
    }

    //testar sem colocar no constructor
    setProduct(): void{
        this.nome = askk.question('System: Qual o nome desse produto? ')
        this.marca = askk.question('System: Qual a marca dele? ')
        this.preco = askk.question('System: Qual o preco unitario dele? ')
        this.precoCusto = askk.question('System: Voce sabe o preco de custo dele? Caso nao saiba, digite 0')

        if(this.precoCusto == '0'){
            this.precoCusto = 'Nao informado.'
        }
    }

    getProduct(): void{
        console.log(`${this.id} - ${this.nome} - ${this.marca}
                          R$ ${this.preco}`)
   }
}

class Sell{
    numDeVenda: number
    product: Product
    quantidade: number
    valorTotal: number
    formaPagamento: string
    data: string | number

    constructor(numDeVenda: number, product: Product, quantidade: number, formaPagamento: string){
        this.numDeVenda = numDeVenda
        this.product = product
        this.quantidade = quantidade
        this.formaPagamento = formaPagamento
        
        this.valorTotal = this.product.preco
        this.data = Date()
    }


    getSell(): void{
        console.log(`---VENDA ${this.numDeVenda}`)
        console.log(`Itens da Venda: ${this.product} Un: ${this.quantidade}\nValor: ${this.valorTotal}\nForma de Pagamento: ${this.formaPagamento.padEnd(10)}Data: ${this.data}`)
    }

    appDesconto(): void{
        let desconto = askk.question('Vai ser aplicado desconto? (S/N)').toUpperCase()
                if(desconto == 'S'){
                    desconto = Number(askk.question('Qual a % de desconto? digite apenas o numero: '))
                    desconto = (desconto / 100) * this.product.preco
                    this.valorTotal -= desconto
                }
    }
}

let produtosArr: Array<Product> = []
let vendasArr: Array<Sell> = []

//Adicionei para ter alguns já no "banco de dados"
let produto1 = new Product(1, 'iPhone 12', 'Apple', 6999, 5000)
let produto2 = new Product(2, 'Galaxy S21', 'Samsung', 5999, 4500)
let produto3 = new Product(3, 'Notebook XPS 13', 'Dell', 8999, 6500)
produtosArr.push(produto1)
produtosArr.push(produto2)
produtosArr.push(produto3)



function menuAPP(){
    while(true){
        console.clear()
        console.log(`--LOJA D' PERIGO--\n1.CRIAR PRODUTO\n2.VER PRODUTO\n3.REGISTRAR VENDA\n4.VER VENDAS
            

            `)
        let optionUser = askk.question('System: Qual opção deseja? \nR: ')
        
        switch(optionUser){
            case '1':
                console.clear()
                console.log(`--CADASTRO DE PRODUTOS--`)
                askk.question('Press anyone key for back the menu.... ')
                break

            case '2':
                console.clear()
                console.log('--VISUALIZAR PRODUTOS--')
                for (let prodVez of produtosArr){
                    prodVez.getProduct()
                }
                askk.question('Press anyone key for back the menu.... ')
                console.clear()
                break
            case '3': //numvenda, product, quantidade, valorTotal, data
                console.clear()
                let numDeVenda = vendasArr.length + 1
                let idDoProd = Number(askk.question('Qual o ID do produto? ')) - 1
                let quantidade = Number(askk.question('Quantidade: '))
                let formaPag = askk.question('Qual vai ser a forma de pagamento? ')
                
                const producto = produtosArr[idDoProd]

                let venda = new Sell(numDeVenda, producto, quantidade, formaPag)

                venda.appDesconto()

                vendasArr.push(venda)
                console.clear()
                break
            case '4':
                console.clear()
                console.log('--VISUALIZAR VENDAS--')
                for (let vendaVez of vendasArr){
                    vendaVez.getSell()
                }
                
                askk.question(`---------------------\nTOTAL DE VENDA REALIZADAS: ${vendasArr.length}\nPress anyone key for back the menu.... `)
                console.clear()
                break
        }  
    }
}

menuAPP()
