var Aluno = /** @class */ (function () {
    function Aluno(name) {
        this.name = name;
        this.notas = [];
    }
    Aluno.prototype.adNotas = function (nota1, nota2, nota3) {
        this.notas.push(nota1, nota2, nota3);
    };
    Aluno.prototype.midia = function () {
        var somaNotas = 0;
        for (var i = 0; i < this.notas.length; i++) {
            somaNotas += this.notas[i];
        }
        var media = somaNotas / this.notas.length;
        return media;
    };
    return Aluno;
}());
var aluno = new Aluno('Natan');
aluno.adNotas(10, 10, 10);
console.log(aluno.midia());
