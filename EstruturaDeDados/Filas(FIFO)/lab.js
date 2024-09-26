"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fila_1 = require("./fila");
var ask = require("readline-sync");
var minhaFila = new fila_1.Fila;
function main(filaDoBanco) {
    while (true) {
        var checkEmpty = filaDoBanco.estaVazia() ? "Yes" : "No";
        console.clear();
        console.log("\n                -------------------------------------\n                - 1. Adicionar Cliente              -\n                - 2. Retirar e visualizar primeiro  -\n                - 3. Visualizar o primero           -\n                - 4. Empty: ".concat(checkEmpty.padEnd(24), "-\n                - 4. Size: ").concat(filaDoBanco.size(), "   \n                -------------------------------------\n        "));
        var user = ask.questionInt('Qual desejas? ');
        switch (user) {
            case 1:
                var cliente = ask.question('\nQual o nome do cliente que deseja adicionar? ');
                ask.question(filaDoBanco.enfileirar(cliente), "... ");
                break;
            case 2:
                console.log("O primeiro cliente e: ".concat(filaDoBanco.desenfileirar()));
                ask.question("...");
                break;
            case 3:
                ask.question("O primeiro cliente e: ".concat(filaDoBanco.primeiro()));
                break;
        }
    }
}
main(minhaFila);
