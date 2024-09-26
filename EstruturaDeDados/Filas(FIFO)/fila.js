"use strict";
//Funciona igual uma fila de verdade
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
var Fila = /** @class */ (function () {
    function Fila() {
        this.elementos = [];
    }
    //Add a one element in the finish fila
    Fila.prototype.enfileirar = function (item) { this.elementos.push(item); };
    //See the size of fila
    Fila.prototype.size = function () { return this.elementos.length; };
    //Check if is empty
    Fila.prototype.estaVazia = function () { return this.elementos.length === 0; };
    //Remove and return the first element
    Fila.prototype.desenfileirar = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
        }
        else {
            console.log(this.elementos[0]);
            return this.elementos.shift();
        }
    };
    //Return the first element
    Fila.prototype.primeiro = function () {
        if (this.estaVazia()) {
            console.log("A fila está fazia! ");
        }
        else {
            return this.elementos[0];
        }
    };
    return Fila;
}());
exports.Fila = Fila;
