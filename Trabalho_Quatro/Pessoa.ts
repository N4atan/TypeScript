let rdl = require('readline-sync')

export class Pessoa123{
    nome: string
    sobrenome: string
    nomePai: string
    nomeMae: string
    numeroCPF: number
    numeroRG: number
    dataNascimento: string

    constructor(nome: string){
        this.nome = nome
        this.sobrenome = ''
        this.nomePai = ''
        this.nomeMae = ''
        this.numeroCPF = 0
        this.numeroRG = 0
        this.dataNascimento = ''
    }

    setPerson123(): void{
        this.sobrenome = rdl.question('Qual seu sobrenome? \nR:')
        this.nomePai = rdl.question('Qual o nome do seu pai? \nR:')
        this.nomeMae = rdl.question('Qual o nome da sua mae? \nR:')
        this.numeroCPF = rdl.question('Qual seu CPF? Digite apenas os numeros... \nR:')
        this.numeroRG = rdl.question('Qual seu RG? \nR:')
        this.dataNascimento = rdl.question('Qual sua data de nascimento? \nR:')
    }

    getPerson123(): string{
        return `${this.nome} ${this.sobrenome}\nNome do Pai: ${this.nomePai}\nNome da Mae: ${this.nomeMae}\nNumero dos docs: ${this.numeroCPF} | ${this.numeroRG}\nData de Nascimento: ${this.dataNascimento}\n`
    }

    getIdade123(): void{
        let dateNascimento = this.dataNascimento.split('/', 3)
        console.log(dateNascimento)

        let monthNow = new Date().getMonth()
        let dayNow = new Date().getDate()
        let yearNow = new Date().getFullYear()

        let monthUserNumber = Number(dateNascimento[0])
        let dayUserNumber = Number(dateNascimento[1])
        let yearUserNumber = Number(dateNascimento[2])

        if((yearNow - yearUserNumber) > 18){
            console.log(`You're 18 years old or more.`)
        } else if(monthNow > monthUserNumber ){
            console.log(`You maked your birthday this year.`)
        } else if (dayNow > dayUserNumber){
            console.log('Voce vai fazer aniversário ainda.')
        }
    }
}

