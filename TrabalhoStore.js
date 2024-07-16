var askk = require('readline-sync');
var Product = /** @class */ (function () {
    function Product(nome) {
        this.nome = nome;
    }
    //testar sem colocar no constructor
    Product.prototype.getProduct = function () {
        this.marca = askk.question('System: Qual a marca dele? ');
        this.tipo = askk.question('System: Como voce classificaria esse produto? ');
        this.preco = askk.question('System: Qual o preco unitario dele? ');
        this.precoCusto = askk.question('System: Voce sabe o preco de custo dele? Caso nao saiba, digite 0');
        if (this.precoCusto == '0') {
            this.precoCusto = 'Nao informado.';
        }
    };
    return Product;
}());
var Sell = /** @class */ (function () {
    function Sell(numDeVenda, product, quantidade, data) {
        this.numDeVenda = numDeVenda;
        this.product = product;
        this.quantidade = quantidade;
        this.valorTotal = this.setPrecoVenda();
        this.data = data;
    }
    Sell.prototype.setPrecoVenda = function () {
        return this.valorTotal * this.quantidade;
    };
    Sell.prototype.aplDesc = function () {
        var porDesc = Number(askk.question('Quantos % de desconto, para me ajudar, por favor digite apenas o numero...: ')) / 100;
        var valorDesc = porDesc * this.valorTotal;
        this.valorTotal -= valorDesc;
    };
    return Sell;
}());
//Product --> nome, marca, tipo, preco, precoCusto
//Sell --> numDeVenda, produto, quantidade, valor total
var produtoTV = new Product('TV Philco 42 Polegadas');
var venda1 = new Sell(1, produtoTV, 2, '27/06/2024');
console.log(produtoTV.marca);
