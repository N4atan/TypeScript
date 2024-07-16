import { Carro } from "./ClassCar";
import { Garagem } from "./ClassGaragem";
let ask = require('readline-sync')


let carro1 = new Carro(1, 'Gol', 'Volkswagen', 5000, 15, 50)
let carro2 = new Carro(2, 'Onix', 'Chevrolet', 4500, 14, 40)
let carro3 = new Carro(3, 'Ka', 'Ford', 4800, 16, 45)
let carro4 = new Carro(4, 'Corolla', 'Toyota', 5500, 18, 55)
let carro5 = new Carro(5, 'Civic', 'Honda', 5200, 17, 52)

let garagem = new Garagem()




let menuApp = true
while(menuApp){
    let idCarro = 6

    console.log(' 1. ADICIONAR A GARAGEM SEUS CARROS PRONTOS\n 2. LISTAR CARROS \n 3.ADICIONAR CARRO NOVO\n 4. DIRIGIR \n 5. COLOCAR GASOLINA')
    let userOption = ask.question('Qual desejas? ')
    
    switch(userOption){
        case '1': 
            garagem.setGaragem(carro1)
            garagem.setGaragem(carro2)
            garagem.setGaragem(carro3)
            garagem.setGaragem(carro4)
            garagem.setGaragem(carro5)
           
            if(garagem.garagem.length > 0){
                console.log('\nFoi adicionado com sucesso !')
                ask.question('...')
                console.clear()
            }

            break
        
        case '2': 
            console.clear()
            garagem.geGCaragem()
            ask.question('...')
            console.clear()
            break
    
        case '3':
            let carro = new Carro(idCarro, '', '', 0, 0, 0)
            carro.setCar()

            console.log('\nNovo Carro Configurado!\n')
            idCarro += 1

            carro.getCar()
            garagem.setGaragem(carro)

            ask.question('...')
            console.clear()
            break        
    
        case '4':
            console.log('Voce ja deve ter visualizado a lista de carros que possui, certo? Então use o ID do que preferir para poder usar.')
            let userChoice = Number(ask.question('Qual o ID? \nR: ')) - 1

            let carroDirigir = garagem.garagem[userChoice]
            carroDirigir.driver()
            ask.question('...')
            console.clear()
            break
        
        case '5':
            console.log('Voce ja deve ter visualizado a lista de carros que possui, certo? Então use o ID do que preferir para poder usar.')
            let userChoice2 = Number(ask.question('Qual o ID? \nR: ')) - 1

            let carroAbastecer = garagem[userChoice2]
            carroAbastecer.addGas()
            break
    }
}