/*
*Classe Tarefa:*
   - Atributos: descrição, prioridade (opcional), status (pendente/concluída).
   - Métodos: um construtor, método para exibir informações da tarefa.
*/

export class Tarefa {
    private status: string = "Pendente"

    constructor(private descricao: string){}

    public exibir (): string { return this.descricao}

    public finish (): void {this.status = "Concluida"}
}