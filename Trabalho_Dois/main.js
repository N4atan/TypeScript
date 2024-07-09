"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jogo_1 = require("./jogo");
var jogo_eletronico_1 = require("./jogo_eletronico");
var jogo_tabuleiro_1 = require("./jogo_tabuleiro");
var biblioteca_1 = require("./biblioteca");
var ask = require('readline-sync');
var jogo1 = new jogo_1.Jogo('Jogo Genérico', 'Aventura', 12);
var jogoEletronico = new jogo_eletronico_1.JogoEletronico('The Legend of Zelda', 'Aventura', 10, 'Nintendo Switch');
var jogoDeTabuleiro = new jogo_tabuleiro_1.JogoDeTabuleiro('Catan', 'Estratégia', 8, 4);
var minhaloja = new biblioteca_1.BlibliotecaDeJogos();
function menuApp() {
    var menu = true;
    while (menu) {
        console.log("1. ADICIONAR JOGOS \n2. REMOVER JOGO \n3. LISTAR JOGOS");
        var userMenu = ask.question('Qual deseja? ');
        switch (userMenu) {
            case '1':
                console.clear();
                minhaloja.addGame(jogo1);
                minhaloja.addGame(jogoEletronico);
                minhaloja.addGame(jogoDeTabuleiro);
                ask.question('...');
                console.clear();
                break;
            case '2':
                console.clear();
                var userRemove = ask.question('Qual deseja remover? ');
                minhaloja.removerJogo();
                ask.question('...');
                console.clear();
                break;
            case '3':
                console.clear();
                console.log(minhaloja.listarJogos());
                ask.question('...');
                console.clear();
                break;
        }
    }
}
menuApp();
