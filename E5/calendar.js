"use strict";
/* ==================================================================================================
    QUESTÃO 2:
- Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos: */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewDate = void 0;
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
exports.NewDate = NewDate;
