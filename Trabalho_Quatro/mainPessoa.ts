import { Pessoa123 } from "./Pessoa";

let ask = require('readline-sync')

let user = new Pessoa123('')

let menuApp = true

while(menuApp){
    console.log('1. Cadastrar Pessoa')
    console.log('2. Ver lista de pessoas cadastradas')
    console.log('3. Ver se e maior de idade')

    let userOption = ask.question('Qual opcao desejas? ')

    switch(userOption){
        case '1': 
            console.clear()
            let name = ask.question('Qual seu nome? \nR:')
            user = new Pessoa123(name)
            user.setPerson123()
            console.clear()
            break
        
        case '2':
           
                console.clear()
                console.log(user.getPerson123())
                ask.question('...')
                console.clear()
            
            break
        
        case '3':
            if(user !== null){
                console.clear()
                user.getIdade123()
            } else {console.log('Voce ainda nao se cadastrou!')}

            break
        
        default:
            console.log('Voce digitou uma opção errada!')
    }
}