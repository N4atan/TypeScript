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

    public getDropPrimeiro (): Tarefa | undefined { return this.tarefas.shift()}

    public getPrimeiro (): string | void {return (this.empty()) ? "" : this.tarefas[0].exibir()}

    //tenta remover, caso sim, troca o status
    public alterarTarefa ():void {this.getDropPrimeiro()?.finish()}

    public getTarefas ():void {return console.table(this.tarefas)}

    public size (): number {return this.tarefas.length}

    public empty (): boolean {return this.size() === 0}
}