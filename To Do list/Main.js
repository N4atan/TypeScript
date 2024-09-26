"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lista_1 = require("./Lista");
var Tarefa_1 = require("./Tarefa");
var ask = require('readline-sync');
function mostrarPontos() {
    var pontos = '.';
    for (var i = 0; i < 90; i++) { // Total de iterações (30, por exemplo)
        if (i % 30 === 0) { // A cada 10 iterações, exibe os pontos
            console.log(pontos);
            pontos += ".";
        }
    }
}
function main() {
    var _a;
    var toDoList = new Lista_1.Lista();
    var mainLoop = true;
    while (mainLoop) {
        console.clear();
        console.log("                    -        First Task       -\n                    - ".concat(toDoList.getPrimeiro(), "\n                    ---------------------------\n                    - 1. Adicionar Task       -\n                    - 2. Listar Tasks         -\n                    - 3. Mudar Status de Task -\n                    - 0. Exit                 -\n                    ---------------------------\n        "));
        var user = ask.questionInt('        - Chose one: ');
        switch (user) {
            case 0:
                mainLoop = false;
                break;
            case 1:
                var tarefa = new Tarefa_1.Tarefa(ask.question('--> Qual a tarefa? '));
                toDoList.addTarefa(tarefa);
                mostrarPontos();
                ask.question('Pronto! Pressione qualquer tecla para continuar...');
                break;
            case 2:
                toDoList.getTarefas();
                ask.question('Pressione qualquer tecla para continuar...');
                break;
            case 3:
                if (toDoList.empty()) {
                    ask.question('Nao ha nenhuma tarefa para ser concluida e apagada! ');
                }
                else {
                    ask.question('--> Ela sera marcada como concluida e depois sera excluida. Ok? (Press any key) ');
                    mostrarPontos();
                    console.log("A tarefa ".concat((_a = toDoList.getDropPrimeiro()) === null || _a === void 0 ? void 0 : _a.exibir(), " foi concuida e apagada da lista!"));
                    ask.question('Pressione qualquer tecla para continuar...');
                }
                break;
        }
    }
}
main();
