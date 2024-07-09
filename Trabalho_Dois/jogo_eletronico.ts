import { Jogo } from "./jogo" 

export class JogoEletronico extends Jogo{
    private plataforma: string
    
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(titulo, genero, classificacaoEtaria);
        this.plataforma = plataforma;
    }

    public getDetails(): string{
        return `${this.titulo} - ${this.genero}
        ${this.classificacaoEtaria} anos. - ${this.plataforma} `
    }
}