"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroComplexo = void 0;
var NumeroComplexo = /** @class */ (function () {
    function NumeroComplexo(nReal, nImaginario) {
        this.nReal = nReal;
        this.nImaginario = nImaginario;
    }
    NumeroComplexo.prototype.setReal = function (real) {
        this.nReal = real;
    };
    NumeroComplexo.prototype.setImaginario = function (imaginario) {
        this.nImaginario = imaginario;
    };
    NumeroComplexo.prototype.getReal = function () {
        return this.nReal;
    };
    NumeroComplexo.prototype.getImaginario = function () {
        return this.nImaginario;
    };
    NumeroComplexo.prototype.toString = function () {
        return "".concat(this.nReal, " + ").concat(this.nImaginario, "i");
    };
    NumeroComplexo.prototype.equals = function (outroComplexo) {
        return this.nReal == outroComplexo.getReal() && this.nImaginario == outroComplexo.getImaginario();
    };
    NumeroComplexo.prototype.modulo = function () {
        //raiz quadrada de: (a*a) + (b*b)
        return Math.sqrt((this.nReal * this.nReal) + (this.nImaginario * this.nImaginario));
    };
    NumeroComplexo.prototype.somar = function (outroComplexo) {
        //(parte real + parte real) = g
        //(parte imaginaria + parte imaginaria) = h
        //g + h"i"
        var numeroRealNovo = (this.nReal + outroComplexo.getReal());
        var numeroImaginarioNovo = (this.nImaginario + outroComplexo.getImaginario());
        var newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo);
        return newNumber;
    };
    NumeroComplexo.prototype.sub = function (outroComplexo) {
        //(parte real - parte real) = g
        //(parte imaginaria - parte imaginaria) = h
        //g + h"i"
        var numeroRealNovo = (this.nReal - outroComplexo.getReal());
        var numeroImaginarioNovo = (this.nImaginario - outroComplexo.getImaginario());
        var newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo);
        return newNumber;
    };
    NumeroComplexo.prototype.mult = function (outroComplexo) {
        var numeroRealNovo = (this.nReal * outroComplexo.getReal()) - (this.nImaginario * outroComplexo.getImaginario());
        var numeroImaginarioNovo = (this.nReal * outroComplexo.getImaginario()) + (this.nImaginario * outroComplexo.getReal());
        var newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo);
        return newNumber;
    };
    NumeroComplexo.prototype.div = function (outroComplexo) {
        var numeroRealNovo = (((this.nReal * outroComplexo.getReal()) + (this.nImaginario * outroComplexo.getImaginario()))) / (((Math.pow(outroComplexo.getReal(), 2)) + (Math.pow(outroComplexo.getImaginario(), 2))));
        var numeroImaginarioNovo = (((this.nImaginario * outroComplexo.getReal()) - (this.nReal * outroComplexo.getImaginario())) / (((Math.pow(outroComplexo.getReal(), 2)) + (Math.pow(outroComplexo.getImaginario(), 2)))));
        var newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo);
        return newNumber;
    };
    return NumeroComplexo;
}());
exports.NumeroComplexo = NumeroComplexo;
