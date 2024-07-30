/* ==================================================================================================
    QUESTÃO 1:
- Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:*/

interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

class Aluno implements Aluno{
    matricula: number
    name: string
    notaExame1: number
    notaExame2: number
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.name = nome
        this.notaExame1 = notaProva1
        this.notaExame2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    //Somente notas de provas
    media(): number {
        return (this.notaExame1 + this.notaExame2) / 3
    }
    
    //Média de notas incluindo trabalho
    final(): number {
        return (this.notaExame1 + this.notaExame2 + this.notaTrabalho) / 3
    }


}

function question1(){
    const student = new Aluno(1, 'Natan', 10, 10, 10)
    console.log(`A media das suas notas de prova é: ${student.media()}`)
    console.log(`A sua nota final é: ${student.final()}`)
}
// ==================================================================================================


/* ==================================================================================================
    QUESTÃO 2:
- Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos: */

interface Datee {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Datee): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Datee;
}


class NewDate implements Datee {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    compara(outraData: NewDate): number {
        if (this.ano !== outraData.ano) {
            return this.ano - outraData.ano;
        } else if (this.mes !== outraData.mes) {
            return this.mes - outraData.mes;
        } else {
            return this.dia - outraData.dia;
        }
    }

    getDia(): number {
        return this.dia;
    }

    getMes(): number {
        return this.mes;
    }

    getMesExtenso(): string {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[this.mes - 1];
    }

    getAno(): number {
        return this.ano;
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    }

    clone(): NewDate {
        return new NewDate(this.dia, this.mes, this.ano);
    }
}


function question2() {
    const data1 = new NewDate(29, 7, 2024);
    const data2 = data1.clone();
    console.log(`Dia: ${data2.getDia()}`);
    console.log(`Mês: ${data2.getMes()}`);
    console.log(`Mês por extenso: ${data2.getMesExtenso()}`);
    console.log(`Ano: ${data2.getAno()}`);
    console.log(`É bissexto: ${data2.isBissexto()}`);
}
// ==================================================================================================


/* ==================================================================================================
    QUESTÃO 3:
- Escreva uma classe em que cada objeto representa um vôo mágico que acontece
em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
métodos: */

interface Voo {
    constructor(numeroVoo: string, data: Date);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Date;
    clone(): Voo;
}