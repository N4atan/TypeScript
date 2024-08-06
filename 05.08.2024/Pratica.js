"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = exports.Senior = exports.Pleno = exports.Junior = void 0;
var Junior = /** @class */ (function () {
    function Junior() {
    }
    Junior.prototype.resolveBugs = function () {
        return "Sou junior e estou resolvendo bugs no JS !!";
    };
    return Junior;
}());
exports.Junior = Junior;
var Pleno = /** @class */ (function () {
    function Pleno() {
    }
    Pleno.prototype.newFeatures = function () {
        return 'Sou Pleno e meu trabalho é criar novas features !';
    };
    return Pleno;
}());
exports.Pleno = Pleno;
var Senior = /** @class */ (function () {
    function Senior() {
    }
    Senior.prototype.administritando = function () {
        return "Sou Senior e administro minha equipe !o! ";
    };
    return Senior;
}());
exports.Senior = Senior;
var Company = /** @class */ (function () {
    function Company() {
        this.funcionarios = [];
    }
    Company.prototype.getFuncionarioFuncao = function () {
        try {
            //Se der certo executa isso:
            for (var _i = 0, _a = this.funcionarios; _i < _a.length; _i++) {
                var worker = _a[_i];
                if (worker instanceof Junior) {
                    return worker.resolveBugs();
                }
                if (worker instanceof Pleno) {
                    return worker.newFeatures();
                }
                if (worker instanceof Senior) {
                    return worker.administritando();
                }
            }
        }
        catch (erro) {
            //Irá mostrar erro no console
            return "Ocorreu um erro: \n".concat(erro.message, "\n----------------------------");
        }
        return 'Fim';
    };
    return Company;
}());
exports.Company = Company;
var natan = new Junior();
var adrian = new Pleno();
var arthur = new Senior();
var senac = new Company();
senac.funcionarios.push(natan);
console.log(senac.getFuncionarioFuncao());
