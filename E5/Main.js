"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require("readline-sync");
var person_1 = require("./person");
var calendar_1 = require("./calendar");
var voo_1 = require("./voo");
var exam_1 = require("./exam");
function menuApp() {
    while (true) {
        console.log('Q1 - Q2 - Q3 - Q4');
        var userOption = ask.question('Qual?').toUpperCase();
        if (userOption == 'Q1') {
            question1();
            console.clear();
        }
        else if (userOption == 'Q2') {
            question2();
            console.clear();
        }
        else if (userOption == 'Q3') {
            question3();
            console.clear();
        }
        else if (userOption == 'Q4') {
            question4();
            console.clear();
        }
    }
}
function question1() {
    console.clear();
    var student = new person_1.Aluno(1, 'Natan', 10, 10, 10);
    console.log("A media das suas notas de prova \u00E9: ".concat(student.media()));
    console.log("A sua nota final \u00E9: ".concat(student.final()));
    ask.question('...');
}
function question2() {
    console.clear();
    var data1 = new calendar_1.NewDate(5, 8, 2024);
    var data2 = data1.clone();
    console.log("Dia: ".concat(data2.getDia()));
    console.log("M\u00EAs: ".concat(data2.getMes()));
    console.log("M\u00EAs por extenso: ".concat(data2.getMesExtenso()));
    console.log("Ano: ".concat(data2.getAno()));
    console.log("\u00C9 ano bissexto: ".concat(data2.isBissexto()));
    console.log("Caso as datas forem iguais, ira aparecer 0, caso n\u00E3o, 1: ".concat(data1.compara(data2)));
    ask.question('...');
}
function question3() {
    var vooMagico = new voo_1.Voo("#001", new calendar_1.NewDate(5, 8, 2024));
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
function question4() {
    var gabarito = new exam_1.Gabarito();
    var prova = new exam_1.Prova(gabarito);
    while (true) {
        console.log('1. SETAR GABARITO\n2.VER GABARITO\n3.FAZER PROVA\n4.VER ACERTOS E NOTA');
        var user4 = ask.question('Qual desejas? ');
        switch (user4) {
            case '1':
                console.clear();
                gabarito.setGabarito();
                console.clear();
                break;
            case '2':
                console.clear();
                if (gabarito.letraAnswer.length == 0) {
                    ask.question('Adicione um primeiro');
                }
                else {
                    '';
                    console.log(gabarito.getGabaritoLetras());
                    console.log(gabarito.getGabaritoValor());
                }
                break;
            case '3':
                console.clear();
                for (var i = 1; i <= 15; i++) {
                    var respostaaa = ask.question("Qual voce ira marcar na quest\u00E3o ".concat(i, "? ")).toUpperCase();
                    prova.setRespostaAluno1(respostaaa);
                }
                break;
            case '4':
                console.clear();
                console.log("Acertos: ".concat(prova.getAcertos()));
                console.log("Nota: ".concat(prova.setnota()));
                ask.question("...");
                break;
            default:
                break;
        }
    }
}
menuApp();
//Arrumar a opção 4 da questao 4...
