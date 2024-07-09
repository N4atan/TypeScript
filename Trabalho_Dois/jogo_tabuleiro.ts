import {Jogo} from './jogo'

export class JogoDeTabuleiro extends Jogo{
    private numeroDeJogadores: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(titulo, genero, classificacaoEtaria)
        this.numeroDeJogadores = numeroDeJogadores
    }
    
    public getDetails(): string {
        return `${this.titulo} - ${this.genero}
        ${this.classificacaoEtaria} anos. - ${this.numeroDeJogadores}`
    }
}