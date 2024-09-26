"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeParque = void 0;
var ask = require('readline-sync');
//uma fila de tras pra frente :)
var FilaDeParque = /** @class */ (function () {
    function FilaDeParque() {
        this.pessoas = [];
    }
    FilaDeParque.prototype.entrarNaFila = function (nome) {
        this.pessoas.unshift(nome);
        //insere no início do vetor, ao invés do final
    };
    FilaDeParque.prototype.atender = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas.pop();
        //retira do fim do vetor
    };
    FilaDeParque.prototype.proximaNaFila = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas[this.pessoas.length - 1];
    };
    FilaDeParque.prototype.estaVazia = function () {
        return this.pessoas.length === 0;
    };
    FilaDeParque.prototype.tamanho = function () {
        return this.pessoas.length;
    };
    return FilaDeParque;
}());
exports.FilaDeParque = FilaDeParque;
//Att: Criar menu switch case
var filaDoParque = new FilaDeParque();
function main(algumaFila) {
    while (true) {
        var checkEmpty = algumaFila.estaVazia() ? "Yes" : "No";
        console.clear();
        console.log("\n                -------------------------------------\n                - 1. Adicionar Pessoa               -\n                - 2. Atender o primeiro             -\n                - 3. Visualizar o primero           -\n                - 4. Empty: ".concat(checkEmpty.padEnd(24), "-\n                - 5. Size: ").concat(algumaFila.tamanho(), "   \n                -------------------------------------\n        "));
        var user = ask.questionInt('Qual desejas? ');
        switch (user) {
            case 1:
                var cliente = ask.question('\nQual o nome do cliente que deseja adicionar? ');
                algumaFila.entrarNaFila(cliente);
                ask.question("Adicionado! ...  ");
                break;
            case 2:
                ask.question("Atendendo: ".concat(algumaFila.proximaNaFila(), " \n... "));
                algumaFila.atender();
                break;
            case 3:
                ask.question("O primeiro cliente e: ".concat(algumaFila.proximaNaFila()));
                break;
        }
    }
}
main(filaDoParque);
