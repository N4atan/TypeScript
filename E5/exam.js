"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = exports.Gabarito = void 0;
var ask = require('readline-sync');
var Gabarito = /** @class */ (function () {
    function Gabarito() {
        this.letraAnswer = [];
        this.pesoLetra = [];
    }
    Gabarito.prototype.setGabarito = function () {
        for (var i = 1; i <= 15; i++) {
            var letter = ask.question("\nQual a letra da resposta da questao numero ".concat(i, "? \nR:")).toUpperCase();
            this.letraAnswer.push(letter);
            if (i <= 10) {
                this.pesoLetra.push(0.5);
            }
            else if (i > 10) {
                this.pesoLetra.push(1);
            }
        }
        ask.question('Finish! Press any key for back to menu...');
    };
    Gabarito.prototype.getGabaritoLetras = function () {
        return this.letraAnswer;
    };
    Gabarito.prototype.getGabaritoValor = function () {
        return this.pesoLetra;
    };
    return Gabarito;
}());
exports.Gabarito = Gabarito;
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.gabarito = gabarito;
        this.respostaAluno = [];
        this.notaAluno = 0;
        this.acertoss = 0;
    }
    Prova.prototype.setRespostaAluno1 = function (resposta) {
        this.respostaAluno.push(resposta);
    };
    Prova.prototype.getAcertos = function () {
        for (var a = 1; 0 <= 15; a++) {
            if (this.respostaAluno[a] == this.gabarito.getGabaritoLetras[a]) {
                this.acertoss += 1;
            }
        }
        return this.acertoss;
    };
    Prova.prototype.setnota = function () {
        for (var i = 0; i <= 15; i++) {
            var letterCorrect = this.gabarito.letraAnswer[i];
            var letterStuddent = this.respostaAluno[i];
            var pesoAcert = this.gabarito.pesoLetra[i];
            if (letterCorrect === letterStuddent) {
                this.notaAluno += pesoAcert;
            }
        }
        return this.notaAluno;
    };
    Prova.prototype.getnota = function () {
        return this.notaAluno;
    };
    //ocmpara a nota atual com a de outra prova
    Prova.prototype.maior = function (outraProva) {
        if (this.getnota() > outraProva.getnota())
            return this.getnota();
        else
            return outraProva.getnota();
    };
    return Prova;
}());
exports.Prova = Prova;
