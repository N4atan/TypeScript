let ask = require("readline-sync")

function menuApp() {
    while (true) {
        console.log('Q1 - Q2 - Q3')
        let userOption = ask.question('Qual?')

        if (userOption == '1') { question1(); console.clear() }
        else if (userOption == '2') { question2(); console.clear() }
        else if (userOption == '3') { question3(); console.clear() }
    }
}

/* ==================================================================================================
    QUESTÃO 1:
- Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:*/

interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

class Aluno implements Aluno {
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

function question1() {
    console.clear()
    const student = new Aluno(1, 'Natan', 10, 10, 10)
    console.log(`A media das suas notas de prova é: ${student.media()}`)
    console.log(`A sua nota final é: ${student.final()}`)
    ask.question('...')
}
// ==================================================================================================


/* ==================================================================================================
    QUESTÃO 2:
- Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos: */

interface Datee {
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

    compara(outraData: Datee): number {
        if (this.ano !== outraData.getAno()) {
            return this.ano - outraData.getAno();
        } else if (this.mes !== outraData.getMes()) {
            return this.mes - outraData.getMes();
        } else {
            return this.dia - outraData.getDia();
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

    clone(): Datee {
        return new NewDate(this.dia, this.mes, this.ano);
    }
}



function question2() {
    console.clear()
    const data1 = new NewDate(5, 8, 2024);
    const data2 = data1.clone();
    console.log(`Dia: ${data2.getDia()}`);
    console.log(`Mês: ${data2.getMes()}`);
    console.log(`Mês por extenso: ${data2.getMesExtenso()}`);
    console.log(`Ano: ${data2.getAno()}`);
    console.log(`É ano bissexto: ${data2.isBissexto()}`);
    console.log(`Caso as datas forem iguais, ira aparecer 0, caso não, 1: ${data1.compara(data2)}`)
    ask.question('...')
}
// ==================================================================================================


/* ==================================================================================================
    QUESTÃO 3:
- Escreva uma classe em que cada objeto representa um vôo mágico que acontece
em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
métodos: */

interface Voo {
    //To usando a classe do Q2 como classe data
    constructor(numeroVoo: string, data: NewDate);
    //no caso proximo assento livre
    proximoLivre(): number;
    //checa ver se tá livre
    verifica(cadeira: number): boolean;
    //ocupa lugar
    ocupa(cadeira: number): boolean;
    //total de vagas livre
    vagas(): number;
    getVoo(): string;
    getData(): NewDate;
    clone(): Voo;
}

class Voo implements Voo {
    numeroVoo: string
    data: NewDate
    assentosLivres: number
    assentosOcupados: Array<number>

    constructor(numeroVoo: string, data: NewDate) {
        this.numeroVoo = numeroVoo
        this.data = data

        this.assentosLivres = 100
        this.assentosOcupados = []
    }

    getVoo(): string {
        return `Voo Nº ${this.numeroVoo} \nAssentos Livres: ${this.assentosLivres}\nAssentos Ocupados: ${this.assentosOcupados.length} 
        `
    }

    getData(): NewDate {
        return this.data
    }

    vagas(): number {
        return this.assentosLivres - this.assentosOcupados.length
    }

    proximoLivre(): number {
        for (let i = 0; i < this.assentosLivres; i++) {
            if (!this.assentosOcupados.includes(i)) {
                return i
            }
        }

        return -1
    }

    verifica(cadeira: number): boolean {
        return !this.assentosOcupados.includes(cadeira)
    }

    ocupa(cadeira: number): boolean {
        if (this.verifica(cadeira)) {
            this.assentosOcupados.push(cadeira)
            return true
        }
        return false
    }

    clone(): Voo {
        let newVoo = new Voo(this.numeroVoo, this.data)
        newVoo.assentosOcupados = this.assentosOcupados
        return newVoo
    }

}




function question3() {
    let vooMagico = new Voo("#001", new NewDate(5, 8, 2024))
    let whilee = true

    while (whilee) {
        console.clear()
        console.log('1. Ver dados do voo \n2.Proximo assento livre \n3.Checar um especifico')

        let user3 = ask.question("\nQUAL: ")
        switch (user3) {
            case '1':
                console.log(vooMagico.getVoo())
                console.log(`Data do voo: ${vooMagico.getData()}`)
                console.log('O numero de assentos desse aviao e:', vooMagico.vagas())
                console.log('Data:', vooMagico.getData())
                ask.question('...')
                break

            case '2':
                console.log(`O proximo assento livre e o: ${vooMagico.proximoLivre()}`)
                ask.question('...')
                break

            case '3':
                let cadeira = Number(ask.question('Qual o numeiro de cadeiran voce gostaria de checar? \nR: '))
                console.log(`A cadeira nº ${cadeira} está livre? ${vooMagico.verifica(cadeira)}`)

                if (ask.question(`Voce irá sentar na cadeira nº ${cadeira}? y/n`) === 'y') {
                    console.log(`Voce sentou na cadeira?  ${vooMagico.ocupa(cadeira)}`)
                } else {
                    break
                }
                ask.question('...')
                break
            
            default:
                ask.question('Opcao invalida...')
                break
        }
    }
}

menuApp()