var Chef = /** @class */ (function () {
    function Chef(nome, idade, anos_xp) {
        this.nome = nome;
        this.idade = idade;
        this.anos_xp = anos_xp;
    }
    return Chef;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(chefe, nome_rest, end_rest) {
        this.chefe = chefe;
        this.nome_rest = nome_rest;
        this.end_rest = end_rest;
    }
    Restaurante.prototype.ApresentacaoRest = function () {
        console.log("OLA! SOMOS O RESTAURANTE ".concat(this.nome_rest));
        console.log("O NOME DO NOSSO CHEFE \u00C9 ".concat(this.chefe.nome));
    };
    return Restaurante;
}());
var cozinheiro = new Chef('Natan', 17, 0);
var restaurante = new Restaurante(cozinheiro, 'Mundo Animal', 'Centro');
restaurante.ApresentacaoRest();
