"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PilhaLivros = void 0;
var ask = require('readline-sync');
// Um exemplo mais lógico, prático
var PilhaLivros = /** @class */ (function () {
    function PilhaLivros() {
        this.livros = [];
    }
    PilhaLivros.prototype.adicionar = function (livro) { this.livros.push(livro); console.log("O livro ".concat(livro, " foi adicionado a pilha ! \n")); };
    PilhaLivros.prototype.retirarUltimo = function () { return this.livros.length !== 0 ? this.livros.pop() : "A pilha está vazia!"; };
    PilhaLivros.prototype.verUltimo = function () { return this.livros.length > 0 ? this.livros[this.livros.length - 1] : "A pilha está vazia!"; };
    PilhaLivros.prototype.checarVazia = function () { return this.livros.length === 0; };
    PilhaLivros.prototype.tamanho = function () { return this.livros.length; };
    PilhaLivros.prototype.limpar = function () { this.livros = []; };
    PilhaLivros.prototype.adicionarLoop = function (biblioteca) {
        for (var i = 0; i < biblioteca.length; i++) {
            this.adicionar(biblioteca[i]);
        }
        return ask.question("Press any key...");
    };
    PilhaLivros.prototype.removerLoop = function () {
        while (this.tamanho() != 0) {
            console.log(this.retirarUltimo(), "--> Foi retirado\n");
        }
        return ask.question("Press any key...");
    };
    return PilhaLivros;
}());
exports.PilhaLivros = PilhaLivros;
var biblioteca = [
    "1984 - George Orwell",
    "Dom Quixote - Miguel de Cervantes",
    "O Senhor dos Anéis - J.R.R. Tolkien",
    "Orgulho e Preconceito - Jane Austen",
    "Cem Anos de Solidão - Gabriel García Márquez",
    "O Grande Gatsby - F. Scott Fitzgerald",
    "A Revolução dos Bichos - George Orwell",
    "Moby Dick - Herman Melville",
    "Crime e Castigo - Fiódor Dostoiévski",
    "O Apanhador no Campo de Centeio - J.D. Salinger"
];
var pilhaDeLivrosMinha = new PilhaLivros();
function main(estanteLivros) {
    while (true) {
        var checkEmpty = estanteLivros.checarVazia() ? "Yes" : "No";
        console.clear();
        console.log("\n                -------------------------------------\n                - 1. Adicionar Livro                -\n                - 2. Retirar e visualizar o ultimo  -\n                - 3. Visualizar o ultimo            -\n                - 4. Empty: ".concat(checkEmpty.padEnd(24), "-\n                - 4. Size: ").concat(estanteLivros.tamanho(), "   \n                - 6. Clear                          -\n                - 7. Adicionar Biblioteca           -\n                - 8. Remover 1 por 1                -\n                -------------------------------------\n        "));
        var user = ask.questionInt('Qual desejas? ');
        switch (user) {
            case 1:
                var livro = ask.question('\nQual o titulo do livro que deseja adicionar? ');
                ask.question(estanteLivros.adicionar(livro));
                break;
            case 2:
                ask.question("O livro ".concat(estanteLivros.retirarUltimo(), " foi retirado"));
                break;
            case 3:
                ask.question("O ultimo livro e: ".concat(estanteLivros.verUltimo()));
                break;
            case 6:
                estanteLivros.limpar();
                ask.question("Pilha Foi limpa! ");
                break;
            case 7:
                estanteLivros.adicionarLoop(biblioteca);
                break;
            case 8:
                estanteLivros.removerLoop();
                break;
        }
    }
}
main(pilhaDeLivrosMinha);
