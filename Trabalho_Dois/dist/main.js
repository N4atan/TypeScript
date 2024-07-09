import Jogo from './jogo';
import JogoEletronico from './jogo_eletronico';
import JogoDeTabuleiro from './jogo_tabuleiro';
import BlibliotecaDeJogos from './biblioteca';
var ask = require('readline-sync');
var jogo1 = new Jogo('Jogo Genérico', 'Aventura', 12);
var jogoEletronico = new JogoEletronico('The Legend of Zelda', 'Aventura', 10, 'Nintendo Switch');
var jogoDeTabuleiro = new JogoDeTabuleiro('Catan', 'Estratégia', 8, 4);
var minhaloja = new BlibliotecaDeJogos();
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
