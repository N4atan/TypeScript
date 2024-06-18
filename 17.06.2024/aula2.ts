var ask = require('readline-sync')

class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    sayHello():void{
        console.clear()
        console.log(`Olá ${this.nome}, vi que voce tem ${this.idade} anos. QUE LEGAL !`)
        console.log(`
                 />_________________________________
        [########[]_________________________________>
                  

        `)
        ask.question('...')
    }
}

class Adulta extends Pessoa{
    sayHello(): void{
        console.log('Voce foi trabalhar !')
        setTimeout(() => {
            for(let i = 0; i < 10; i++){
                console.log('...')
            }
            console.log(`Agora que voce, ${this.nome}, já voltou pra casa, são 22:00. Voce esta morrendo de sono, entao resolveu dormir, pois amanha, o ciclo continua...`)
        }, 5000)

    }
}

class Crianca extends Pessoa{
    sayHello(): void{
        console.log(`Avo: Aproveite ${this.nome}, aproveite em quanto voce e crianca. Brinque, chore, sorria, se machuque... Pois quando voce cresce, nao possui tempo para nada, apenas trabalhar e trabalhar, TE AMO MEU QUERIDO NETINHO!`)
    }
}

class Idoso extends Pessoa{
    aposentadoria: string

    super(nome: string, idade: number, aposentadoria: string){
        this.nome = nome
        this.idade = idade
        this.aposentadoria = '0'
    }

    sayHello(): void{
        if(ask.question('Voce qer sacar sua aposentadoria? ') === 'sim'){
            this.aposentadoria = '200 pila na conta do banco.'
            console.log(`Pronto, agora voce tem ${this.aposentadoria}`)
            ask.question('Bora bebe!! ...')
        }
    }
}

let years = Number(ask.question('Quantos anos voce tem? '))
let name1 = ask.question('Qual seu nome? ')
let user

if(years < 10){
    user = new Crianca(name1, years)
    
} else if(years >= 10 && years <= 18){
    user = new Pessoa(name1, years)
    
} else if(years > 18 && years < 60){
    user = new Adulta(name1, years)

} else if(years >= 60){
    user = new Idoso(name1, years)
}

user.sayHello()

