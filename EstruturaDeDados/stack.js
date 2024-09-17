"use strict";
//Exemplo de stack básico
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
var Pilha = /** @class */ (function () {
    function Pilha() {
        this.elementos = []; //um array de itens de T.
    }
    //mesmo sendo function, nao é nome próprio... 
    //pushPilha (outro nome)...
    Pilha.prototype.push = function (item) {
        this.elementos.push(item);
    };
    //tira o primeiro da lista e retorna
    Pilha.prototype.pop = function () {
        return this.elementos.pop();
    };
    //comando peek = mostra o ultimo elemento da pilha :)
    Pilha.prototype.peek = function () {
        return this.elementos.length[this.elementos.length - 1];
    };
    //retorna boolean para vazio ou nao
    Pilha.prototype.isEmpy = function () {
        return this.elementos.length === 0;
    };
    //verifica o tamanho da pilha
    Pilha.prototype.size = function () {
        return this.elementos.length;
    };
    //limpar a pilha
    Pilha.prototype.clear = function () {
        this.elementos = [];
    };
    return Pilha;
}());
exports.Pilha = Pilha;
var minhaPilha = new Pilha();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);
console.log(minhaPilha.peek());
console.log(minhaPilha.size());
console.log(minhaPilha.isEmpy());
