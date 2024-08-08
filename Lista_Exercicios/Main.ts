let ask = require("readline-sync")

import { Aluno } from "./person";
import { NewDate } from "./calendar";
import { Voo } from "./voo";
import { Gabarito, Prova } from "./exam";


function menuApp() {
    while (true) {
        console.log('Q1 - Q2 - Q3 - Q4')
        let userOption = ask.question('Qual?')

        if (userOption == '1') { question1(); console.clear() }
        else if (userOption == '2') { question2(); console.clear() }
        else if (userOption == '3') { question3(); console.clear() }
        else if(userOption == '4') {question4(); console.clear()}
    }
}

function question1() {
    console.clear()
    const student = new Aluno(1, 'Natan', 10, 10, 10)
    console.log(`A media das suas notas de prova é: ${student.media()}`)
    console.log(`A sua nota final é: ${student.final()}`)
    ask.question('...')
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

function question4(){
    let gabarito = new Gabarito()
    let prova = new Prova(gabarito)

    while(true){
        console.log('1. SETAR GABARITO\n2.VER GABARITO\n3.FAZER PROVA\n4.VER ACERTOS E NOTA')
        let user4 = ask.question('Qual desejas? ')

    
        switch(user4){
            case '1':
                console.clear()
                gabarito.setGabarito()
                console.clear()
                break
        
            case '2':
                console.clear()
                if(gabarito.letraAnswer.length == 0){
                    ask.question('Adicione um primeiro')
                } else {''
                    console.log(gabarito.getGabaritoLetras())
                    console.log(gabarito.getGabaritoValor())
                }
                break

            case '3':
                console.clear()
                for(let i = 1; i <= 15; i++){
                    let respostaaa = ask.question(`Qual voce ira marcar na questão ${i}? `).toUpperCase()
                    prova.setRespostaAluno1(respostaaa)
                }
                break

            case '4':
                console.clear()
                console.log(`Acertos: ${prova.getAcertos()}`)
                console.log(`Nota: ${prova.setnota()}`)
                ask.question("...")
                break
            default:
                break
        }
    }
}

menuApp()
//Arrumar a opção 4 da questao 4...