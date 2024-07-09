"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlibliotecaDeJogos = void 0;
var ask = require('readline-sync');
var BlibliotecaDeJogos = /** @class */ (function () {
    function BlibliotecaDeJogos() {
        this.jogos = [];
    }
    BlibliotecaDeJogos.prototype.addGame = function (jjogoPAdd) {
        this.jogos.push(jjogoPAdd);
    };
    BlibliotecaDeJogos.prototype.removerJogo = function () {
        var titulo = ask.question('Qual deseja remover? ');
        var index = this.jogos.findIndex(function (jogooos) { return jogooos.getTitulo() === titulo; });
        if (index !== -1) {
            this.jogos.splice(index, 1);
            console.log("O jogo foi excluido com sucesso!");
        }
    };
    BlibliotecaDeJogos.prototype.listarJogos = function () {
        var lista = '';
        for (var i = 0; i < this.jogos.length; i++) {
            lista += this.jogos[i].getDetails() + '\n';
        }
        return lista.trim();
    };
    return BlibliotecaDeJogos;
}());
exports.BlibliotecaDeJogos = BlibliotecaDeJogos;
