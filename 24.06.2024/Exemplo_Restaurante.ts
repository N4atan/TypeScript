class Chef{
    nome: string
    idade: number
    anos_xp: number
    
    constructor(nome: string, idade: number, anos_xp: number){
        this.nome = nome
        this.idade = idade
        this.anos_xp = anos_xp
    }
}

class Restaurante{
    chefe: Chef
    nome_rest: string
    end_rest: string

    constructor(chefe: Chef, nome_rest: string, end_rest: string){
        this.chefe = chefe
        this.nome_rest = nome_rest
        this.end_rest = end_rest
    }

    ApresentacaoRest(): void{
        console.log(`OLA! SOMOS O RESTAURANTE ${this.nome_rest}`)
        console.log(`O NOME DO NOSSO CHEFE É ${this.chefe.nome}`)
    }
}

let cozinheiro = new Chef('Natan', 17, 0)

let restaurante = new Restaurante(cozinheiro, 'Mundo Animal', 'Centro')

restaurante.ApresentacaoRest()