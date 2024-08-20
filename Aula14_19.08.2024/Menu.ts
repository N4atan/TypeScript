import { NumeroComplexo } from "../Aula13_12.08.2024/NumeroComplexo";
import {Contador} from  "../Aula13_12.08.2024/Contador";
import { Ponto2DBase, Ponto22, Ponto2DPadrao } from  "../Aula13_12.08.2024/Ponto2D";

let ask = require('readline-sync')
let contadinho = new Contador()

function funContador(){
    const intervalo = setInterval(() => {
        contadinho.incrementar(1); // Incrementa o valor a cada segundo
    }, 1000); // 1000ms = 1 segundo
    
    while(true){
        console.clear()
        console.log(`
        ------------- MENU 1 -----------------------
        VALOR ATUAL: ${contadinho.valorAtual()}
        --------------------------------------------
        1. Incrementar +1
        2. Zerar
        3. Voltar
        --------------------------------------------
        `)
        let userOption = ask.question(`Qual opcao? `)

        switch(userOption){
            case '1':
                contadinho.incrementar(1)
                break
            case '2':
                contadinho.zerar() 
                break
            case '3':
                return
            default:
                ask.question('Escolha uma opcao valida!')
                console.clear()
                break
        }
    }
}

function funPlanoCartesiano(){
    let ponto1 = new Ponto2DBase()
    let ponto2 = new Ponto2DPadrao(10, 10)
    let ponto3 = new Ponto22(ponto2)

    let funMenu = false
    while(!funMenu){
        console.clear()    
        console.log(`
        ------------- MENU 2 -----------------------
        1. Definir eixos X e Y.
        2. Exibir Ponto 1 e Ponto 2.
        3. Ver distancia entre Pontos.
        4. Comparar Ponto 1 com o Ponto 2.
        5. Voltar...
        --------------------------------------------
        `)  
        let userOption = ask.question("Qual desejas meu caro consagrado? \nR: ")

        switch(userOption){
            case '1':
                console.clear()
                let qualPonto = ask.question('Para qual voce deseja? Ponto 1 ou Ponto 2. \nDigite apenas o numero do respectivo. \nR: ')

                if(qualPonto == 1){
                    ponto1.setX(Number(ask.question('Qual o valor do eixo X? ')))
                    ponto1.setY(Number(ask.question('Qual o valor do eixo Y? ')))
                } else {
                    ponto2.setX(Number(ask.question('Qual o valor do eixo X? ')))
                    ponto2.setY(Number(ask.question('Qual o valor do eixo Y? ')))
                }
                ask.question("Pronto! ...")
                break

            case '2': 
                console.clear()
                console.log(`Ponto 1:
                ${ponto1.toString()}

                Ponto 2:
                ${ponto2.toString()}
                `)

                ask.question("...")
                break

            case '3':
                console.clear()
                console.log(`A distancia entre eles e de: ${ponto1.distancia(ponto2)}`)
                ask.question('...')
                break

            case '4':
                console.clear()
                console.log(`O Ponto 1 e igual ao Ponto 2? ${ponto1.equals(ponto2)}`)
                ask.question('...')
                break

            case '5':
                funMenu = true
                break

            default:
                ask.question('Escolha uma opcao valida!')
                console.clear()
                break
        }
    }
}

function funNumeroComplexo(){
    let number1 = new NumeroComplexo(10, 5)
    let number2 = new NumeroComplexo(20, 10)

    //Usar return
    while(true){
        console.clear()
        console.log(`
        ------------- MENU 3 -----------------------
          N1: ${number1.toString()} / N2: ${number2.toString()} 
        --------------------------------------------
        1. Somar
        2. Substrair
        3. Multiplicacao
        4. Divisao
        5. Modulo
        6. Setar Real e Imaginario do N1
        7. Setar Real e Imaginario do N2
        8. Voltar
        --------------------------------------------
        `)
        let userOption = ask.question("Qual desejas Sr. ? ")

        switch(userOption){
            case '1':
                let number3 = number1.somar(number2)
                console.log(`Soma: ${number3.toString()}`)
                ask.question('...')
                break
            
            case '2':
                let number4 = number1.sub(number2)
                console.log(`Subtrair: ${number4.toString()}`)
                ask.question('...')
                break

            case '3':
                let number5 = number1.mult(number2)
                console.log(`Multiplicação: ${number5.toString()}`)
                ask.question('...')
                break

            case '4':
                let number6 = number1.div(number2)
                console.log(`Divisao: ${number6.toString()}`)
                ask.question('...')
                break

            case '5':
                console.log(`
                Modulo do Numero 1: ${number1.modulo()}
                Modulo do Numero 2: ${number2.modulo()}
                `)
                ask.question('...')
                break

            case '6':
                number1.setReal(Number(ask.question('Qual a parte real? ')))
                number1.setImaginario(Number(ask.question('Qual a parte imaginaria? ')))
                ask.question('Pronto! ...')
                break
            
            case '7':
                number2.setReal(Number(ask.question('Qual a parte real? ')))
                number2.setImaginario(Number(ask.question('Qual a parte imaginaria? ')))
                ask.question('Pronto! ...')
                break

            case '8':
                return
                break
            
            default:
                ask.question('Escolha uma opcao valida!')
                console.clear()
                break

        }

    }
}

function menuApp(){
    while(true){
        console.clear()
        console.log(`
        --MENU DOS MENUS --
        1. MENU 1
        2. MENU 2
        3. MENU 3
        -------------------
        `)
        
        let escolhaUser = ask.question("Qual? ")

        if(escolhaUser == 1){funContador()}
        else if(escolhaUser == 2){funPlanoCartesiano()}
        else if(escolhaUser == 3){funNumeroComplexo()}
    }
}

menuApp()