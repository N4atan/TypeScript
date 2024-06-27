let ask = require('readline-sync')

class Teacher{
    nome: string
    idade: number
    disciplina: string
    
    constructor(nome: string, idade: number, disciplina: string){
        this.nome = nome
        this.idade = idade
        this.disciplina = disciplina
    }

    setTeacher(): void{
        let nomeUp = ask.question('Qual o nome do novo professor? ')
        let idadeUp = Number(ask.question('Qual idade ele tem? '))
        let disciplinaUp = ask.question('Qual disciplina ele dá? ')

        this.nome = nomeUp
        this.idade = idadeUp
        this.disciplina = disciplinaUp
        ask.question('...')
        console.clear()
    }

    getTeacher(): void{
        console.log(`??: Olá, me chamo ${this.nome}.`)
        console.log(`${this.nome}: Tenho ${this.idade} anos e serei seu novo professor de ${this.disciplina}.`)
        ask.question('...')
        console.clear()
    }


}

class School{
    professor: Teacher
    nome_school: string
    end_school: string

    constructor(professor: Teacher, nome_school: string, end_school: string){
        this.professor = professor
        this.nome_school = nome_school
        this.end_school = end_school
    }

    getSchool(): void{
        console.log(`Google Maps: A escola ${this.nome_school} fica na rua ${this.end_school}. O professor mais conhecido deles é o ${this.professor.nome}.`)
        ask.question('...')
        console.clear()
    }

    setSchool(): void{
        let nomeUp = ask.question('Qual o nome da nova escola? ')
        let endUp = ask.question('Qual o novo nome da rua? ')

        this.nome_school = nomeUp
        this.end_school = endUp
        ask.question('...')
        console.clear()
    }
}

/*Criar Professor, 
Criar Escola, 
modificar Professor,
modificar Escola, 
visualizar Professor,
 visualizar Escola e 
 sair. */

let professor
let escola
let whilee = true



while(whilee){
    console.log(`
            --MENU--
        1.CRIAR PROFESSOR
        2.CRIAR ESCOLA
        3.MODIFICAR PROFESSOR
        4.MODIFICAR ESCOLA
        5.VISUALIZAR PROFESSOR
        6.VIZUALIZAR ESCOLA
        7.SAIR
    `)

    let answerUser = Number(ask.question('Qual deseja? Digite o numero!!'))

    switch(answerUser){
        case 1://NOME, IDADE, DISCIPLINA
            if(professor == null){
                let nome = ask.question('Qual o nome desse professor?')
                let idade = Number(ask.question('Quantos anos ele tem? '))
                let disciplina = ask.question('Ele é professor de qual matéria? ')
                professor = new Teacher(nome, idade, disciplina)
            } else {console.log('Voce já criou um professor!'); ask.question('...'); console.clear()}
            break

        case 2: //professor, nome escola, endereço escola
            if(escola == null){
                let nomeEscola = ask.question('Qual o nome da escola? ')
                let endEscola = ask.question('Em qual rua ela fica? ')
                escola = new School(professor, nomeEscola, endEscola)
            } else {console.log('Voce já criou uma escola!'); ask.question('...'); console.clear()}
            break

        case 3:
            if(professor != null){
                professor.setTeacher()
            } else {console.log('Voce ainda nao pode executar esse código!'); ask.question('...'); console.clear()}
            break
        
        case 4:
            if(escola != null){
                escola.setSchool()
            } else {console.log('Voce ainda nao pode executar esse código!'); ask.question('...'); console.clear()}
            break

        case 5:
            if(professor != null){
                professor.getTeacher()
            } else {console.log('Voce ainda nao pode executar esse código!'); ask.question('...'); console.clear()}
            break

        case 6:
            if(escola != null){
                escola.getSchool()
            } else {console.log('Voce ainda nao pode executar esse código!'); ask.question('...'); console.clear()}
            break

        case 7:
            whilee = false
            console.clear()
            break
    }
}