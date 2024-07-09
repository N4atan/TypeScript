var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetails = function () {
        return "".concat(this.titulo, " - ").concat(this.genero, "\n        ").concat(this.classificacaoEtaria, " anos.");
    };
    Jogo.prototype.getTitulo = function () {
        return "".concat(this.titulo);
    };
    return Jogo;
}());
export { Jogo };
