"use strict";
/*
Classe FilaDeTarefas:*
   - Atributos: uma lista que armazena as tarefas.
   - Métodos:
     - adicionar_tarefa(tarefa): adiciona uma nova tarefa à fila.
     - remover_tarefa(): remove e retorna a tarefa que está no início da fila.
     - listar_tarefas(): exibe todas as tarefas na fila.
     - tarefa_pronta(): marca a tarefa no início da fila como concluída.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = void 0;
var Lista = /** @class */ (function () {
    function Lista() {
        this.tarefas = [];
    }
    Lista.prototype.addTarefa = function (tarefa1) { this.tarefas.push(tarefa1); };
    Lista.prototype.getDropPrimeiro = function () { return this.tarefas.shift(); };
    Lista.prototype.getPrimeiro = function () { return (this.empty()) ? "" : this.tarefas[0].exibir(); };
    //tenta remover, caso sim, troca o status
    Lista.prototype.alterarTarefa = function () { var _a; (_a = this.getDropPrimeiro()) === null || _a === void 0 ? void 0 : _a.finish(); };
    Lista.prototype.getTarefas = function () { return console.table(this.tarefas); };
    Lista.prototype.size = function () { return this.tarefas.length; };
    Lista.prototype.empty = function () { return this.size() === 0; };
    return Lista;
}());
exports.Lista = Lista;
