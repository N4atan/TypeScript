/*
Classe FilaDeTarefas:*
   - Atributos: uma lista que armazena as tarefas.
   - Métodos:
     - adicionar_tarefa(tarefa): adiciona uma nova tarefa à fila.
     - remover_tarefa(): remove e retorna a tarefa que está no início da fila.
     - listar_tarefas(): exibe todas as tarefas na fila.
     - tarefa_pronta(): marca a tarefa no início da fila como concluída.
*/

import { Tarefa } from "./Tarefa"

export class Lista {
    private tarefas: Tarefa[] = []

    public addTarefa (tarefa1: Tarefa): void {this.tarefas.push(tarefa1)}
    public delTarefa (): Tarefa | undefined { return this.tarefas.shift()}
    public alterarTarefa (tarefa1: Tarefa):void {tarefa1.finish()}
    public getTarefas ():void {return console.table(this.tarefas)}
}