var ask = require('readline-sync');
//Primeira letra do nome de uma classe sempre MAISCULA! 
//Como o typescript é uma linguagem tipada, preciso declarar o tipo dela.
var Carro = /** @class */ (function () {
    //esse caro seria uma planta de um futuro carro
    //server para "contruir" cada parte do carro, sendo uma função também.
    //Esses paramentros da função representa o carro que estou criando.
    function Carro(motor, rodas, marca, cor) {
        //This sera explicado later, but this is obrigated, aqui eu digo que o motor do carro que estou criando é igual ao motor da planta do carro!
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
    }
    /* Diferente do js, aqui nao dizemos que é uma função, apenas o nome!
    Nesse exemplo digo que a função dirigir nao possui nenhum paramentro, apenas para exemplo */
    Carro.prototype.dirigir = function () {
        console.clear();
        console.log("Estou dirigindo meu ".concat(carro.marca));
        console.log("\n                        ____________________\n                     //|           |        \\\n                   //  |           |          \\\n      ___________//____|___________|__________()__________________\n    /__________________|_=_________|_=___________|_________________{}\n    [           ______ |           | .           | ==  ______      { }\n  __[__        /##  ##\\|           |             |    /##  ##\\    _{# }_\n {_____)______|##    ##|___________|_____________|___|##    ##|__(______}\n             /  ##__##                              /  ##__##        \\\n----------------------------------------------------------------------------\n");
        ask.question('...');
    };
    //Adicionado para desafios
    Carro.prototype.checkYears = function () {
        console.clear();
        var idadeDoMotorista = Number(ask.question("Qual sua idade? \nR: "));
        if (idadeDoMotorista > 18) {
            console.log('Voce ja pode fazer sua CNH, ou roda até perder.');
            ask.question('...');
        }
        else {
            console.log('Se ferra quem é pego! Sim bora!');
            ask.question('...');
        }
    };
    //Adicionado para desafios
    Carro.prototype.lavar = function () {
        console.clear();
        var estadoSujeiraDoCarro = ask.question('Qual estado do carro? ').toLowerCase();
        if (estadoSujeiraDoCarro === 'sujo') {
            console.log('Lava essa merda ai');
            ask.question('...');
        }
        else {
            console.log('Ok');
            ask.question('...');
        }
    };
    return Carro;
}());
//Uma das boas praticas é fazer um arquivo só com classes e o outro com os objetos, mas para fins educativos, faremos no mesmo
var carro;
function montarCarro() {
    console.clear();
    console.log("-------------------- MONTANDO O CARRO --------------------");
    var motor = Number(ask.question("Quantas cilidradas tem o motor? \nR: "));
    var rodas = Number(ask.question("Qual o aro da roda? \nR: "));
    var marca = ask.question("Qual a marca do carro? \nR: ");
    var cor = ask.question("Qual a cor do carro? \nR: ");
    carro = new Carro(motor, rodas, marca, cor);
}
var menuAppLoop = true;
function menuApp() {
    while (menuAppLoop) {
        console.clear();
        console.log("-------------------------------------");
        console.log('1. Montar Carro');
        console.log("2. Dirigir");
        console.log("3. Lavar");
        console.log("4. Ver se tenho idade");
        console.log("5. Sair");
        var answerUser = Number(ask.question('\nQual voce deseja? \nR: '));
        switch (answerUser) {
            case 1:
                montarCarro();
                console.clear();
                break;
            case 2:
                carro.dirigir();
                break;
            case 3:
                carro.lavar();
                break;
            case 4:
                carro.checkYears();
                break;
            case 5:
                menuAppLoop = false;
                console.clear();
        }
    }
}
//Agora para executa-lo precisamos converter para js ---> npx tsc index.td
///Adicionado para desafio, sendo fora da classe é igual ao js
menuApp();
