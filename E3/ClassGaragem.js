"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.garagem = [];
    }
    Garagem.prototype.setGaragem = function (carroParaAdd) {
        this.garagem.push(carroParaAdd);
    };
    Garagem.prototype.geGCaragem = function () {
        for (var _i = 0, _a = this.garagem; _i < _a.length; _i++) {
            var carrinho = _a[_i];
            carrinho.getCar();
            console.log('\n');
        }
    };
    return Garagem;
}());
exports.Garagem = Garagem;
