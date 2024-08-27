"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var ask = require('readline-sync');
var Carro = /** @class */ (function () {
    //Deixar apenas um com só id
    function Carro(id, nomePopular, marca, tanque, km, gasolinaDisponivel) {
        this.id = id;
        this.nomePopular = nomePopular;
        this.marca = marca;
        this.tanque = tanque;
        this.km = km;
        this.gasolinaDisponive = gasolinaDisponivel;
    }
    Carro.prototype.getCar = function () {
        console.log("ID: ".concat(this.id, " | Marca: ").concat(this.marca.padEnd(20), " | Nome Popular: ").concat(this.nomePopular.padEnd(20)));
        console.log("Capacidade do Tanque em MLs: ".concat(this.tanque.toString().padEnd(20), " | Consumo por Km: ").concat(this.km.toString().padEnd(5), " | Tanque Dispon\u00EDvel: ").concat(this.gasolinaDisponive.toFixed(2)));
        console.log('------------------------------------------------------------');
    };
    Carro.prototype.setCar = function () {
        this.marca = ask.question('Qual a marca do carro? \nR: ');
        this.nomePopular = ask.question('Qual seria o nome popular desse carro? \nR: ');
        this.tanque = Number(ask.question("Qual a capacidade de gasolina do tanque do ".concat(this.nomePopular, " ? Digite apenas os MLs \nR:")));
        this.km = Number(ask.question('Qauntos kms ele faz por litro? Digite apenas os numeros. \n R: '));
        this.gasolinaDisponive = Number(ask.question('Há gasolina no tanque já ? Digite apenas o número. \nR: '));
    };
    Carro.prototype.driver = function () {
        //tanque -( distancia / km)
        var distance = Number(ask.question('Quantos kms voce quer viajar? '));
        //Aqui checamos a quantidade de gasolina necessaria para a viagem
        var gasNecessaria = (distance / this.km);
        //Aqui vejo se a gasolina necessaria é maior que a disponivel, caso for ele nao podera, caso nao for ele podera. 
        if (gasNecessaria > this.gasolinaDisponive) {
            console.log('Infelizmente voce nao pode viajar essa distancia');
        }
        else {
            //Aqui eu pego a gas que ja tem e tiro o que foi usado na viagem
            this.gasolinaDisponive -= gasNecessaria;
            console.log('Voce está viajando');
            console.log('........');
            console.log('Pronto, voce chegou ao seu destino!!! ');
        }
    };
    Carro.prototype.getGas = function () {
        return "Voce tem no momento ".concat(this.gasolinaDisponive, " Mls de gasolina!! ");
    };
    Carro.prototype.addGas = function () {
        console.log('Quando MLs de gasolina voce quer colocar? \nR: ');
    };
    return Carro;
}());
exports.Carro = Carro;
