"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto22 = exports.Ponto2DPadrao = exports.Ponto2DBase = void 0;
var Ponto2DBase = /** @class */ (function () {
    function Ponto2DBase() {
        this.x = 0;
        this.y = 0;
    }
    Ponto2DBase.prototype.setX = function (valorx) {
        this.x = valorx;
    };
    Ponto2DBase.prototype.setY = function (valory) {
        this.y = valory;
    };
    Ponto2DBase.prototype.getX = function () {
        return this.x;
    };
    Ponto2DBase.prototype.getY = function () {
        return this.y;
    };
    Ponto2DBase.prototype.toString = function () {
        return "\n        X: ".concat(this.x, "\n        Y: ").concat(this.y, "\n        ");
    };
    Ponto2DBase.prototype.equals = function (outroPonto) {
        return this.x === outroPonto.getX() && this.y === outroPonto.getY();
    };
    /*
     distancia = raizV(x2 - x1) *2 + (y2 - y1)*2
    */
    Ponto2DBase.prototype.distancia = function (outroPonto) {
        var dx = outroPonto.getX() - this.x;
        var dy = outroPonto.getY() - this.y;
        //serve para fazer raiz quadrada
        return Math.sqrt((dx * dx) + (dy * dy));
    };
    Ponto2DBase.prototype.clone = function () {
        return new Ponto2DBase();
    };
    return Ponto2DBase;
}());
exports.Ponto2DBase = Ponto2DBase;
var Ponto2DPadrao = /** @class */ (function (_super) {
    __extends(Ponto2DPadrao, _super);
    function Ponto2DPadrao(x, y) {
        var _this = _super.call(this) || this;
        _this.setX(x);
        _this.setY(y);
        return _this;
    }
    return Ponto2DPadrao;
}(Ponto2DBase));
exports.Ponto2DPadrao = Ponto2DPadrao;
var Ponto22 = /** @class */ (function (_super) {
    __extends(Ponto22, _super);
    function Ponto22(outroPonto) {
        var _this = _super.call(this) || this;
        _this.setX(outroPonto.getX());
        _this.setY(outroPonto.getY());
        return _this;
    }
    return Ponto22;
}(Ponto2DBase));
exports.Ponto22 = Ponto22;
var ponto1 = new Ponto2DBase();
var ponto2 = new Ponto2DPadrao(10, 10);
var ponto3 = new Ponto22(ponto2);
