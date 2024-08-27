import {Jogo} from './jogo'

let ask = require('readline-sync')    

export class BlibliotecaDeJogos{
    private jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    public addGame(jjogoPAdd: Jogo): void{
        this.jogos.push(jjogoPAdd)
    }

    public removerJogo(): void{
        let titulo = ask.question('Qual deseja remover? ')
        const index = this.jogos.findIndex(jogooos => jogooos.getTitulo() === titulo)
        if(index !== -1){
        this.jogos.splice(index, 1)
        console.log(`O jogo foi excluido com sucesso!`)
        
        
        for(const jogo1 of this.jogos){
            let tituloDoJogo = jogo1.getTitulo()
            if (tituloDoJogo)
        }
    }
    }

    public listarJogos(): string {
        let lista = '';
        for (let i = 0; i < this.jogos.length; i++) {
            lista += this.jogos[i].getDetails() + '\n';
        }
        return lista.trim();
    }
}