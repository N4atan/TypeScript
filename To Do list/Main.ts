import { Lista } from "./Lista";
import { Tarefa } from "./Tarefa";
let ask = require('readline-sync')
/*
     - adicionar_tarefa(tarefa): adiciona uma nova tarefa à fila.
     - remover_tarefa(): remove e retorna a tarefa que está no início da fila.
     - listar_tarefas(): exibe todas as tarefas na fila.
     - tarefa_pronta(): marca a tarefa no início da fila como concluída.
*/



function main(){
    let toDoList = new Lista();
    let main = true;

    while(main)
        console.clear();
        console.log(`\
            0. Exit
            1. Adicionar Task
            2. Listar Tasks
            3. Mudar Status de Task
            4. Delete Task
            `);
        
        let user = ask.questionInt('-->Chose one: ');
        
        switch (user) {
            case 0:
                main = false;
                break;
            
            case 1: 
                toDoList.addTarefa(new Tarefa(ask.question('--> Qual a tarefa? ')));
                
                break

            case 2: 
                toDoList.getTarefas();
                
                break
            
            
        } 
}

main()