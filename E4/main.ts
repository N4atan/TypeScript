import {Jogo} from './jogo'
import {JogoEletronico} from './jogo_eletronico'
import {JogoDeTabuleiro} from './jogo_tabuleiro'
import {BlibliotecaDeJogos} from './biblioteca'



let ask = require('readline-sync')    
    
    
const jogo1 = new Jogo('Jogo Genérico', 'Aventura', 12)
const jogoEletronico = new JogoEletronico('The Legend of Zelda', 'Aventura', 10, 'Nintendo Switch')
const jogoDeTabuleiro = new JogoDeTabuleiro('Catan', 'Estratégia', 8, 4)

const minhaloja = new BlibliotecaDeJogos()


function menuApp(){
    let menu= true
    while(menu){
        console.log(`1. ADICIONAR JOGOS \n2. REMOVER JOGO \n3. LISTAR JOGOS`)

        let userMenu = ask.question('Qual deseja? ')

        switch(userMenu){
            case '1':                  
            console.clear()
            minhaloja.addGame(jogo1)                
            minhaloja.addGame(jogoEletronico)
            minhaloja.addGame(jogoDeTabuleiro)
            ask.question('...')
            console.clear()                    
            break
                case '2':
                    console.clear()
                    minhaloja.removerJogo()
                    ask.question('...')
                    console.clear()
                    break

                case '3':
                    console.clear()
                    console.log(minhaloja.listarJogos())
                    ask.question('...')
                    console.clear()
                    break
            }
        }
    }

    menuApp()