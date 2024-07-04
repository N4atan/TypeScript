class Jogo{
    protected titulo: string
    protected genero: string
    protected classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }

    public getDetails(): string{
        return `
        ${this.titulo} - ${this.genero}
        ${this.classificacaoEtaria} anos.`
    }

    public getTitulo(): string{
        return `${this.titulo}`
    }
}

class JogoEletronico extends Jogo{
    private plataforma: string
    
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(titulo, genero, classificacaoEtaria);
        this.plataforma = plataforma;
    }

    public getDetails(): string{
        return `
        ${this.titulo} - ${this.genero}
        ${this.plataforma} ${this.classificacaoEtaria} anos.`
    }
}

class JogoDeTabuleiro extends Jogo{
    private numeroDeJogadores: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(titulo, genero, classificacaoEtaria)
        this.numeroDeJogadores = numeroDeJogadores
    }
    
    public getDetails(): string {
        return `
        ${this.titulo} - ${this.genero}
        ${this.classificacaoEtaria} anos.`
    }
}

class BlibliotecaDeJogos{
    private jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    public addGame(jjogoPAdd: Jogo): void{
        this.jogos.push(jjogoPAdd)
    }

    public removerJogo(titulo: string){
       const index = this.jogos.findIndex(jogooos => jogooos.getTitulo() === titulo)
       if(index !== -1){
        this.jogos.splice(index, 1)
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


const jogo1 = new Jogo('Jogo Genérico', 'Aventura', 12)
const jogoEletronico = new JogoEletronico('The Legend of Zelda', 'Aventura', 10, 'Nintendo Switch')
const jogoDeTabuleiro = new JogoDeTabuleiro('Catan', 'Estratégia', 8, 4)

const minhaloja = new BlibliotecaDeJogos()

minhaloja.addGame(jogo1)
minhaloja.addGame(jogoEletronico)
minhaloja.addGame(jogoDeTabuleiro)

console.log(minhaloja.listarJogos());