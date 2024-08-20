"use strict";
/* ==================================================================================================
    QUESTÃO 1:
- Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.name = nome;
        this.notaExame1 = notaProva1;
        this.notaExame2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    //Somente notas de provas
    Aluno.prototype.media = function () {
        return (this.notaExame1 + this.notaExame2) / 2;
    };
    //Média de notas incluindo trabalho
    Aluno.prototype.final = function () {
        return (this.notaExame1 + this.notaExame2 + this.notaTrabalho) / 3;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
