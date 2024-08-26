"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumeroComplexo_1 = require("../Aula13_12.08.2024/NumeroComplexo");
var Contador_1 = require("../Aula13_12.08.2024/Contador");
var Ponto2D_1 = require("../Aula13_12.08.2024/Ponto2D");
var ask = require('readline-sync');
var contadinho = new Contador_1.Contador();
function funContador() {
    while (true) {
        console.clear();
        console.log("\n        ------------- MENU 1 -----------------------\n        VALOR ATUAL: ".concat(contadinho.valorAtual(), "\n        --------------------------------------------\n        1. Incrementar +1\n        2. Zerar\n        3. Voltar\n        --------------------------------------------\n        "));
        var userOption = ask.question("Qual opcao? ");
        switch (userOption) {
            case '1':
                contadinho.incrementar(1);
                break;
            case '2':
                contadinho.zerar();
                break;
            case '3':
                return;
            default:
                ask.question('Escolha uma opcao valida!');
                console.clear();
                break;
        }
    }
}
function funPlanoCartesiano() {
    var ponto1 = new Ponto2D_1.Ponto2DBase();
    var ponto2 = new Ponto2D_1.Ponto2DPadrao(10, 10);
    var ponto3 = new Ponto2D_1.Ponto22(ponto2);
    var funMenu = false;
    while (!funMenu) {
        console.clear();
        console.log("\n        ------------- MENU 2 -----------------------\n        1. Definir eixos X e Y.\n        2. Exibir Ponto 1 e Ponto 2.\n        3. Ver distancia entre Pontos.\n        4. Comparar Ponto 1 com o Ponto 2.\n        5. Voltar...\n        --------------------------------------------\n        ");
        var userOption = ask.question("Qual desejas meu caro consagrado? \nR: ");
        switch (userOption) {
            case '1':
                console.clear();
                var qualPonto = ask.question('Para qual voce deseja? Ponto 1 ou Ponto 2. \nDigite apenas o numero do respectivo. \nR: ');
                if (qualPonto == 1) {
                    ponto1.setX(Number(ask.question('Qual o valor do eixo X? ')));
                    ponto1.setY(Number(ask.question('Qual o valor do eixo Y? ')));
                }
                else {
                    ponto2.setX(Number(ask.question('Qual o valor do eixo X? ')));
                    ponto2.setY(Number(ask.question('Qual o valor do eixo Y? ')));
                }
                ask.question("Pronto! ...");
                break;
            case '2':
                console.clear();
                console.log("Ponto 1:\n                ".concat(ponto1.toString(), "\n\n                Ponto 2:\n                ").concat(ponto2.toString(), "\n                "));
                ask.question("...");
                break;
            case '3':
                console.clear();
                console.log("A distancia entre eles e de: ".concat(ponto1.distancia(ponto2)));
                ask.question('...');
                break;
            case '4':
                console.clear();
                console.log("O Ponto 1 e igual ao Ponto 2? ".concat(ponto1.equals(ponto2)));
                ask.question('...');
                break;
            case '5':
                funMenu = true;
                break;
            default:
                ask.question('Escolha uma opcao valida!');
                console.clear();
                break;
        }
    }
}
function funNumeroComplexo() {
    var number1 = new NumeroComplexo_1.NumeroComplexo(10, 5);
    var number2 = new NumeroComplexo_1.NumeroComplexo(20, 10);
    //Usar return
    while (true) {
        console.clear();
        console.log("\n        ------------- MENU 3 -----------------------\n          N1: ".concat(number1.toString(), " / N2: ").concat(number2.toString(), " \n        --------------------------------------------\n        1. Somar\n        2. Substrair\n        3. Multiplicacao\n        4. Divisao\n        5. Modulo\n        6. Setar Real e Imaginario do N1\n        7. Setar Real e Imaginario do N2\n        8. Voltar\n        --------------------------------------------\n        "));
        var userOption = ask.question("Qual desejas Sr. ? ");
        switch (userOption) {
            case '1':
                var number3 = number1.somar(number2);
                console.log("Soma: ".concat(number3.toString()));
                ask.question('...');
                break;
            case '2':
                var number4 = number1.sub(number2);
                console.log("Subtrair: ".concat(number4.toString()));
                ask.question('...');
                break;
            case '3':
                var number5 = number1.mult(number2);
                console.log("Multiplica\u00E7\u00E3o: ".concat(number5.toString()));
                ask.question('...');
                break;
            case '4':
                var number6 = number1.div(number2);
                console.log("Divisao: ".concat(number6.toString()));
                ask.question('...');
                break;
            case '5':
                console.log("\n                Modulo do Numero 1: ".concat(number1.modulo(), "\n                Modulo do Numero 2: ").concat(number2.modulo(), "\n                "));
                ask.question('...');
                break;
            case '6':
                number1.setReal(Number(ask.question('Qual a parte real? ')));
                number1.setImaginario(Number(ask.question('Qual a parte imaginaria? ')));
                ask.question('Pronto! ...');
                break;
            case '7':
                number2.setReal(Number(ask.question('Qual a parte real? ')));
                number2.setImaginario(Number(ask.question('Qual a parte imaginaria? ')));
                ask.question('Pronto! ...');
                break;
            case '8':
                return;
                break;
            default:
                ask.question('Escolha uma opcao valida!');
                console.clear();
                break;
        }
    }
}
function menuApp() {
    while (true) {
        console.clear();
        console.log("\n        --MENU DOS MENUS --\n        1. MENU 1\n        2. MENU 2\n        3. MENU 3\n        -------------------\n        ");
        var escolhaUser = ask.question("Qual? ");
        if (escolhaUser == 1) {
            funContador();
        }
        else if (escolhaUser == 2) {
            funPlanoCartesiano();
        }
        else if (escolhaUser == 3) {
            funNumeroComplexo();
        }
    }
}
menuApp();
