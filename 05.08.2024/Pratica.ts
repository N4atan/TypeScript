export class Junior{
     resolveBugs(): string{
        return `Sou junior e estou resolvendo bugs no JS !!`
     }
}

export class Pleno{
    newFeatures(): string{
        return 'Sou Pleno e meu trabalho é criar novas features !'
    }
}

export class Senior{
    administritando(): string{
        return `Sou Senior e administro minha equipe !o! `
    }
}

export class Company{
    funcionarios: (Junior | Pleno | Senior)[]

    constructor(){
        this.funcionarios = []
    }

    getFuncionarioFuncao(): string{
        try{
            //Se der certo executa isso:
            for(let worker of this.funcionarios){
                if(worker instanceof Junior){return worker.resolveBugs()}
                if(worker instanceof Pleno){return worker.newFeatures()}
                if(worker instanceof Senior){return worker.administritando()}
            }
        } catch(erro) {
            //Irá mostrar erro no console
            return `Ocorreu um erro: \n${erro.message}\n----------------------------`;
        }
        return 'Fim'
    }
}


let natan = new Junior()

let adrian = new Pleno()

let arthur = new Senior()

let senac = new Company()

senac.funcionarios.push(natan)

console.log(senac.getFuncionarioFuncao())