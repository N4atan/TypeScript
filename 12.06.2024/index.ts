var ask = require('readline-sync')

//Primeira letra do nome de uma classe sempre MAISCULA! 
//Como o typescript é uma linguagem tipada, preciso declarar o tipo dela.
class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string
    
    //esse caro seria uma planta de um futuro carro


    //server para "contruir" cada parte do carro, sendo uma função também.
    //Esses paramentros da função representa o carro que estou criando.
   constructor(motor: number, rodas: number, marca: string, cor: string){
    //This sera explicado later, but this is obrigated, aqui eu digo que o motor do carro que estou criando é igual ao motor da planta do carro!
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        }


    /* Diferente do js, aqui nao dizemos que é uma função, apenas o nome!
    Nesse exemplo digo que a função dirigir nao possui nenhum paramentro, apenas para exemplo */
    dirigir(){
        console.clear()
        console.log(`Estou dirigindo meu ${carro.marca}`)
        console.log(`
                        ____________________
                     //|           |        \\
                   //  |           |          \\
      ___________//____|___________|__________()\__________________
    /__________________|_=_________|_=___________|_________________{}
    [           ______ |           | .           | ==  ______      { }
  __[__        /##  ##\\|           |             |    /##  ##\\    _{# }_
 {_____)______|##    ##|___________|_____________|___|##    ##|__(______}
             /  ##__##                              /  ##__##        \\
----------------------------------------------------------------------------
`);

        ask.question('...')
    }
    
    //Adicionado para desafios
    checkYears(){
        console.clear()
        let idadeDoMotorista = Number(ask.question("Qual sua idade? \nR: "))

        if(idadeDoMotorista > 18){
            console.log('Voce ja pode fazer sua CNH, ou roda até perder.')
            ask.question('...')
        }else{
            console.log('Se ferra quem é pego! Sim bora!')
            ask.question('...')
        }
    }

    //Adicionado para desafios
    lavar(){
        console.clear()
        let estadoSujeiraDoCarro = ask.question('Qual estado do carro? ').toLowerCase()

        if(estadoSujeiraDoCarro === 'sujo'){
            console.log('Lava essa merda ai')
            ask.question('...')
        } else{console.log('Ok'); ask.question('...')}
    }

}

//Uma das boas praticas é fazer um arquivo só com classes e o outro com os objetos, mas para fins educativos, faremos no mesmo
let carro

function montarCarro(){
    console.clear()
    console.log("-------------------- MONTANDO O CARRO --------------------")
    let motor = Number(ask.question("Quantas cilidradas tem o motor? \nR: "))
    let rodas = Number(ask.question("Qual o aro da roda? \nR: "))
    let marca = ask.question("Qual a marca do carro? \nR: ")
    let cor = ask.question("Qual a cor do carro? \nR: ")
    
    carro = new Carro(motor, rodas, marca, cor)
}





let menuAppLoop = true
function menuApp(){
    while(menuAppLoop){    
        console.clear()
            console.log("-------------------------------------")
            console.log('1. Montar Carro')
            console.log("2. Dirigir")
            console.log("3. Lavar")
            console.log("4. Ver se tenho idade")
            console.log("5. Sair")

            let answerUser = Number(ask.question('\nQual voce deseja? \nR: '))

            switch(answerUser){
                case 1:
                    montarCarro()
                    console.clear()
                    break
                    
                case 2:
                    carro.dirigir()
                    
                    break
                
                case 3: 
                    carro.lavar()
                   
                    break

                case 4:
                    carro.checkYears()
                    break
                
                case 5:
                    menuAppLoop = false
                    console.clear()
                
            }
    }
}
//Agora para executa-lo precisamos converter para js ---> npx tsc index.td

///Adicionado para desafio, sendo fora da classe é igual ao js

menuApp()
