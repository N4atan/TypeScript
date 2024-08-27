let ask = require('readline-sync')

export interface CarroInterface{
    marca: string
    tanque: number
    km: number

    driver(): void
    getGas() : string
    addGas(): void
}

export class Carro implements CarroInterface{
    id: number
    public nomePopular: string
    public marca: string
    public tanque: number
    public km: number
    public gasolinaDisponive: number

    //Deixar apenas um com só id
    constructor(id: number, nomePopular: string, marca: string, tanque: number, km: number, gasolinaDisponivel: number){
        this.id = id
        this.nomePopular = nomePopular
        this.marca = marca
        this.tanque = tanque
        this.km = km
        this.gasolinaDisponive = gasolinaDisponivel
    }

    public getCar(): void{
        console.log(`ID: ${this.id} | Marca: ${this.marca.padEnd(20)} | Nome Popular: ${this.nomePopular.padEnd(20)}`);
        console.log(`Capacidade do Tanque em MLs: ${this.tanque.toString().padEnd(20)} | Consumo por Km: ${this.km.toString().padEnd(5)} | Tanque Disponível: ${this.gasolinaDisponive.toFixed(2)}`);
        console.log('------------------------------------------------------------');
    }

    public setCar():void{
        this.marca = ask.question('Qual a marca do carro? \nR: ')
        this.nomePopular = ask.question('Qual seria o nome popular desse carro? \nR: ')
        this.tanque = Number(ask.question(`Qual a capacidade de gasolina do tanque do ${this.nomePopular} ? Digite apenas os MLs \nR:`))
        this.km = Number(ask.question('Qauntos kms ele faz por litro? Digite apenas os numeros. \n R: '))
        this.gasolinaDisponive = Number(ask.question('Há gasolina no tanque já ? Digite apenas o número. \nR: '))
    }

    public driver(): void{
        //tanque -( distancia / km)

        let distance = Number(ask.question('Quantos kms voce quer viajar? '))

        //Aqui checamos a quantidade de gasolina necessaria para a viagem
        let gasNecessaria = (distance / this.km)

        //Aqui vejo se a gasolina necessaria é maior que a disponivel, caso for ele nao podera, caso nao for ele podera. 
        if (gasNecessaria > this.gasolinaDisponive){
            console.log('Infelizmente voce nao pode viajar essa distancia')
        } else {
            //Aqui eu pego a gas que ja tem e tiro o que foi usado na viagem
            this.gasolinaDisponive -= gasNecessaria
            console.log('Voce está viajando')
            console.log('........')
            console.log('Pronto, voce chegou ao seu destino!!! ')
        }
    }

    public getGas() : string{
        return `Voce tem no momento ${this.gasolinaDisponive} Mls de gasolina!! `
    }

    public addGas(): void{
        console.log('Quando MLs de gasolina voce quer colocar? \nR: ')
    }
}