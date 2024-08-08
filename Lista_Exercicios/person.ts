/* ==================================================================================================
    QUESTÃO 1:
- Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:*/

export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number
    name: string
    notaExame1: number
    notaExame2: number
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula
        this.name = nome
        this.notaExame1 = notaProva1
        this.notaExame2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    //Somente notas de provas
    media(): number {
        return (this.notaExame1 + this.notaExame2) / 2
    }

    //Média de notas incluindo trabalho
    final(): number {
        return (this.notaExame1 + this.notaExame2 + this.notaTrabalho) / 3
    }


}