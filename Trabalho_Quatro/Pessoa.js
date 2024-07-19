"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa123 = void 0;
var rdl = require('readline-sync');
var Pessoa123 = /** @class */ (function () {
    function Pessoa123(nome) {
        this.nome = nome;
        this.sobrenome = '';
        this.nomePai = '';
        this.nomeMae = '';
        this.numeroCPF = 0;
        this.numeroRG = 0;
        this.dataNascimento = '';
    }
    Pessoa123.prototype.setPerson123 = function () {
        this.sobrenome = rdl.question('Qual seu sobrenome? \nR:');
        this.nomePai = rdl.question('Qual o nome do seu pai? \nR:');
        this.nomeMae = rdl.question('Qual o nome da sua mae? \nR:');
        this.numeroCPF = rdl.question('Qual seu CPF? Digite apenas os numeros... \nR:');
        this.numeroRG = rdl.question('Qual seu RG? \nR:');
        this.dataNascimento = rdl.question('Qual sua data de nascimento? \nR:');
    };
    Pessoa123.prototype.getPerson123 = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome, "\nNome do Pai: ").concat(this.nomePai, "\nNome da Mae: ").concat(this.nomeMae, "\nNumero dos docs: ").concat(this.numeroCPF, " | ").concat(this.numeroRG, "\nData de Nascimento: ").concat(this.dataNascimento, "\n");
    };
    Pessoa123.prototype.getIdade123 = function () {
        var dateNascimento = this.dataNascimento.split('/', 3);
        console.log(dateNascimento);
        var monthNow = new Date().getMonth();
        var dayNow = new Date().getDate();
        var yearNow = new Date().getFullYear();
        var monthUserNumber = Number(dateNascimento[0]);
        var dayUserNumber = Number(dateNascimento[1]);
        var yearUserNumber = Number(dateNascimento[2]);
        if ((yearNow - yearUserNumber) > 18) {
            console.log("You're 18 years old or more.");
        }
        else if (monthNow > monthUserNumber) {
            console.log("You maked your birthday this year.");
        }
        else if (dayNow > dayUserNumber) {
            console.log('Voce vai fazer aniversário ainda.');
        }
    };
    return Pessoa123;
}());
exports.Pessoa123 = Pessoa123;
