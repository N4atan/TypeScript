"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassCar_1 = require("./ClassCar");
var ClassGaragem_1 = require("./ClassGaragem");
var ask = require('readline-sync');
var carro1 = new ClassCar_1.Carro(1, 'Gol', 'Volkswagen', 5000, 15, 50);
var carro2 = new ClassCar_1.Carro(2, 'Onix', 'Chevrolet', 4500, 14, 40);
var carro3 = new ClassCar_1.Carro(3, 'Ka', 'Ford', 4800, 16, 45);
var carro4 = new ClassCar_1.Carro(4, 'Corolla', 'Toyota', 5500, 18, 55);
var carro5 = new ClassCar_1.Carro(5, 'Civic', 'Honda', 5200, 17, 52);
var garagem = new ClassGaragem_1.Garagem();
var menuApp = true;
while (menuApp) {
    var idCarro = 6;
    console.log(' 1. ADICIONAR A GARAGEM SEUS CARROS PRONTOS\n 2. LISTAR CARROS \n 3.ADICIONAR CARRO NOVO\n 4. DIRIGIR \n 5. COLOCAR GASOLINA');
    var userOption = ask.question('Qual desejas? ');
    switch (userOption) {
        case '1':
            garagem.setGaragem(carro1);
            garagem.setGaragem(carro2);
            garagem.setGaragem(carro3);
            garagem.setGaragem(carro4);
            garagem.setGaragem(carro5);
            if (garagem.garagem.length > 0) {
                console.log('\nFoi adicionado com sucesso !');
                ask.question('...');
                console.clear();
            }
            break;
        case '2':
            console.clear();
            garagem.geGCaragem();
            ask.question('...');
            console.clear();
            break;
        case '3':
            var carro = new ClassCar_1.Carro(idCarro, '', '', 0, 0, 0);
            carro.setCar();
            console.log('\nNovo Carro Configurado!\n');
            idCarro += 1;
            carro.getCar();
            garagem.setGaragem(carro);
            ask.question('...');
            console.clear();
            break;
        case '4':
            console.log('Voce ja deve ter visualizado a lista de carros que possui, certo? Então use o ID do que preferir para poder usar.');
            var userChoice = Number(ask.question('Qual o ID? \nR: ')) - 1;
            var carroDirigir = garagem.garagem[userChoice];
            carroDirigir.driver();
            ask.question('...');
            console.clear();
            break;
        case '5':
            console.log('Voce ja deve ter visualizado a lista de carros que possui, certo? Então use o ID do que preferir para poder usar.');
            var userChoice2 = Number(ask.question('Qual o ID? \nR: ')) - 1;
            var carroAbastecer = garagem[userChoice2];
            carroAbastecer.addGas();
            break;
    }
}
