class Teatcher{
    nome: string
    idade: number
    anos_xp: number
    
    constructor(nome: string, idade: number, anos_xp: number){
        this.nome = nome
        this.idade = idade
        this.anos_xp = anos_xp
    }
}

class School{
    professor: Teatcher
    nome_school: string
    end_school: string

    constructor(professor: Teatcher, nome_school: string, end_school: string){
        this.professor = professor
        this.nome_school = nome_school
        this.end_school = end_school
    }

    getNewProfessor(): void{
        
    }

    getNewSchool(): void{
        let school_name = ask.question('Qual o nome da escola? ')
        let endereco = ask.question('Aonde fica essa escola? ')

        this.nome_school = school_name
        this.end_school = endereco
    }

    setProfessor(): void{
        
    }
}

/*Criar Professor, 
Criar Escola, 
modificar Professor,
modificar Escola, 
visualizar Professor,
 visualizar Escola e 
 sair. */


while(true){
    console.log('1. Criar Professor')
    console.log('2. Criar escola')
    console.log('3. Modificar Professor')
    console.log('4.Modificar escola')
    console.log('5. Visualizar Professor')
    console.log('6. Visualizar Escola')
    console.log('7. Sair')

    let answerUser = Number(ask.question('Qual deseja? Digite o numero!!'))

    switch(answerUser){
        case 1:
        case 2:
        case 3:

    }
}