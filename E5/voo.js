"use strict";
/* ==================================================================================================
    QUESTÃO 3:
- Escreva uma classe em que cada objeto representa um vôo mágico que acontece
em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
métodos: */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
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
exports.Voo = Voo;
