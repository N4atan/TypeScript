"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
var Contador = /** @class */ (function () {
    function Contador() {
        this.contador = 0;
    }
    Contador.prototype.zerar = function () {
        this.contador = 0;
    };
    //++ (é igual a += 1) tbm tem o -- (é igual -= 1)
    Contador.prototype.incrementar = function (number) {
        this.contador += number;
    };
    Contador.prototype.valorAtual = function () {
        return this.contador;
    };
    return Contador;
}());
exports.Contador = Contador;
