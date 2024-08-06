var ask = require("readline-sync");
function menuApp() {
    while (true) {
        console.log('Q1 - Q2 - Q3');
        var userOption = ask.question('Qual?');
        if (userOption == '1') {
            question1();
            console.clear();
        }
        else if (userOption == '2') {
            question2();
            console.clear();
        }
        else if (userOption == '3') {
            question3();
            console.clear();
        }
    }
}
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.name = nome;
        this.notaExame1 = notaProva1;
        this.notaExame2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    //Somente notas de provas
    Aluno.prototype.media = function () {
        return (this.notaExame1 + this.notaExame2) / 2;
    };
    //Média de notas incluindo trabalho
    Aluno.prototype.final = function () {
        return (this.notaExame1 + this.notaExame2 + this.notaTrabalho) / 3;
    };
    return Aluno;
}());
function question1() {
    console.clear();
    var student = new Aluno(1, 'Natan', 10, 10, 10);
    console.log("A media das suas notas de prova \u00E9: ".concat(student.media()));
    console.log("A sua nota final \u00E9: ".concat(student.final()));
    ask.question('...');
}
var NewDate = /** @class */ (function () {
    function NewDate(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    NewDate.prototype.compara = function (outraData) {
        if (this.ano !== outraData.getAno()) {
            return this.ano - outraData.getAno();
        }
        else if (this.mes !== outraData.getMes()) {
            return this.mes - outraData.getMes();
        }
        else {
            return this.dia - outraData.getDia();
        }
    };
    NewDate.prototype.getDia = function () {
        return this.dia;
    };
    NewDate.prototype.getMes = function () {
        return this.mes;
    };
    NewDate.prototype.getMesExtenso = function () {
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[this.mes - 1];
    };
    NewDate.prototype.getAno = function () {
        return this.ano;
    };
    NewDate.prototype.isBissexto = function () {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    };
    NewDate.prototype.clone = function () {
        return new NewDate(this.dia, this.mes, this.ano);
    };
    return NewDate;
}());
function question2() {
    console.clear();
    var data1 = new NewDate(5, 8, 2024);
    var data2 = data1.clone();
    console.log("Dia: ".concat(data2.getDia()));
    console.log("M\u00EAs: ".concat(data2.getMes()));
    console.log("M\u00EAs por extenso: ".concat(data2.getMesExtenso()));
    console.log("Ano: ".concat(data2.getAno()));
    console.log("\u00C9 ano bissexto: ".concat(data2.isBissexto()));
    console.log("Caso as datas forem iguais, ira aparecer 0, caso n\u00E3o, 1: ".concat(data1.compara(data2)));
    ask.question('...');
}
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.assentosLivres = 100;
        this.assentosOcupados = [];
    }
    Voo.prototype.getVoo = function () {
        return "Voo N\u00BA ".concat(this.numeroVoo, " \nAssentos Livres: ").concat(this.assentosLivres, "\nAssentos Ocupados: ").concat(this.assentosOcupados.length, " \n        ");
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.vagas = function () {
        return this.assentosLivres - this.assentosOcupados.length;
    };
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.assentosLivres; i++) {
            if (!this.assentosOcupados.includes(i)) {
                return i;
            }
        }
        return -1;
    };
    Voo.prototype.verifica = function (cadeira) {
        return !this.assentosOcupados.includes(cadeira);
    };
    Voo.prototype.ocupa = function (cadeira) {
        if (this.verifica(cadeira)) {
            this.assentosOcupados.push(cadeira);
            return true;
        }
        return false;
    };
    Voo.prototype.clone = function () {
        var newVoo = new Voo(this.numeroVoo, this.data);
        newVoo.assentosOcupados = this.assentosOcupados;
        return newVoo;
    };
    return Voo;
}());
function question3() {
    var vooMagico = new Voo("#001", new NewDate(5, 8, 2024));
    var whilee = true;
    while (whilee) {
        console.clear();
        console.log('1. Ver dados do voo \n2.Proximo assento livre \n3.Checar um especifico');
        var user3 = ask.question("\nQUAL: ");
        switch (user3) {
            case '1':
                console.log(vooMagico.getVoo());
                console.log("Data do voo: ".concat(vooMagico.getData()));
                console.log('O numero de assentos desse aviao e:', vooMagico.vagas());
                console.log('Data:', vooMagico.getData());
                ask.question('...');
                break;
            case '2':
                console.log("O proximo assento livre e o: ".concat(vooMagico.proximoLivre()));
                ask.question('...');
                break;
            case '3':
                var cadeira = Number(ask.question('Qual o numeiro de cadeiran voce gostaria de checar? \nR: '));
                console.log("A cadeira n\u00BA ".concat(cadeira, " est\u00E1 livre? ").concat(vooMagico.verifica(cadeira)));
                if (ask.question("Voce ir\u00E1 sentar na cadeira n\u00BA ".concat(cadeira, "? y/n")) === 'y') {
                    console.log("Voce sentou na cadeira?  ".concat(vooMagico.ocupa(cadeira)));
                }
                else {
                    break;
                }
                ask.question('...');
                break;
            default:
                ask.question('Opcao invalida...');
                break;
        }
    }
}
menuApp();
