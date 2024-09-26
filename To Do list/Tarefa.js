"use strict";
/*
*Classe Tarefa:*
   - Atributos: descrição, prioridade (opcional), status (pendente/concluída).
   - Métodos: um construtor, método para exibir informações da tarefa.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
var Tarefa = /** @class */ (function () {
    function Tarefa(descricao) {
        this.descricao = descricao;
        this.status = "Pendente";
    }
    Tarefa.prototype.exibir = function () { return this.descricao; };
    Tarefa.prototype.finish = function () { this.status = "Concluida"; };
    return Tarefa;
}());
exports.Tarefa = Tarefa;
