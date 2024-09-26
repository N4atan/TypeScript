import { findSourceMap } from "module";
import { Lista } from "./Lista";
import { Tarefa } from "./Tarefa";
let ask = require('readline-sync')


function mostrarPontos() {
    let pontos = '.'

    for (let i = 0; i < 90; i++) { // Total de iterações (30, por exemplo)
        if (i % 30 === 0) { // A cada 10 iterações, exibe os pontos
            console.log(pontos)
            pontos += "."
        }
    }
   
}

function main(){
    let toDoList = new Lista();
    let mainLoop = true;

    while(mainLoop){
        console.clear();
        

        console.log(`\
                    -        First Task       -
                    - ${toDoList.getPrimeiro()}
                    ---------------------------
                    - 1. Adicionar Task       -
                    - 2. Listar Tasks         -
                    - 3. Mudar Status de Task -
                    - 0. Exit                 -
                    ---------------------------
        `);
        
        let user = ask.questionInt('        - Chose one: ')
        
        switch (user) {
            case 0:
                mainLoop = false;
                break;
            
            case 1:
                let tarefa = new Tarefa(ask.question('--> Qual a tarefa? ')) ;
                toDoList.addTarefa(     tarefa);
                mostrarPontos();
                ask.question('Pronto! Pressione qualquer tecla para continuar...');
                break

            case 2: 
                toDoList.getTarefas();
                ask.question('Pressione qualquer tecla para continuar...');
                break
            
            case 3:
                if (toDoList.empty()) {
                    ask.question('Nao ha nenhuma tarefa para ser concluida e apagada! ');
                } else { 
                    ask.question('--> Ela sera marcada como concluida e depois sera excluida. Ok? (Press any key) ');
                    mostrarPontos();
                    console.log(`A tarefa ${toDoList.getDropPrimeiro()?.exibir()} foi concuida e apagada da lista!`);
                    ask.question('Pressione qualquer tecla para continuar...');
                }
                break
        }
    } 
}

main()