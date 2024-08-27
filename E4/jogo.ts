//Interface 
interface Game{
    titulo: string
    genero: string
    classificacaoEtaria: number
}

export class Jogo implements Game{
    public titulo: string
    public genero: string
    public classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }

    public getDetails(): string{
        return `${this.titulo} - ${this.genero}
        ${this.classificacaoEtaria} anos.`
    }

    public getTitulo(): string{
        return `${this.titulo}`
    }
}