var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ask = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetails = function () {
        return "".concat(this.titulo, " - ").concat(this.genero, "\n            ").concat(this.classificacaoEtaria, " anos.");
    };
    Jogo.prototype.getTitulo = function () {
        return "".concat(this.titulo);
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(titulo, genero, classificacaoEtaria, plataforma) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.plataforma = plataforma;
        return _this;
    }
    JogoEletronico.prototype.getDetails = function () {
        return "".concat(this.titulo, " - ").concat(this.genero, "\n            ").concat(this.classificacaoEtaria, " anos. - ").concat(this.plataforma, " ");
    };
    return JogoEletronico;
}(Jogo));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = numeroDeJogadores;
        return _this;
    }
    JogoDeTabuleiro.prototype.getDetails = function () {
        return "".concat(this.titulo, " - ").concat(this.genero, "\n            ").concat(this.classificacaoEtaria, " anos. - ").concat(this.numeroDeJogadores);
    };
    return JogoDeTabuleiro;
}(Jogo));
var BlibliotecaDeJogos = /** @class */ (function () {
    function BlibliotecaDeJogos() {
        this.jogos = [];
    }
    BlibliotecaDeJogos.prototype.addGame = function (jjogoPAdd) {
        this.jogos.push(jjogoPAdd);
    };
    BlibliotecaDeJogos.prototype.removerJogo = function (titulo) {
        var index = this.jogos.findIndex(function (jogooos) { return jogooos.getTitulo() === titulo; });
        if (index !== -1) {
            this.jogos.splice(index, 1);
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
                minhaloja.removerJogo(userRemove);
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
