class Aluno{
    name: string
    notas: Array<number>

    constructor(name: string){
        this.name = name
        this.notas = []
    }

    adNotas(nota1: number): void{
        this.notas.push(nota1)
    }

    midia(): number{
        let somaNotas = 0

        for(let i = 0; i < this.notas.length; i++){
            somaNotas += this.notas[i]
        }

        let media = somaNotas / this.notas.length
        return media
    }


}

let aluno = new Aluno('Natan')
aluno.adNotas(10)
aluno.adNotas(10)
aluno.adNotas(10)
console.log(aluno.midia())

