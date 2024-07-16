import { Carro } from "./ClassCar";

export class Garagem{
    garagem: Carro[] = []

    public setGaragem(carroParaAdd): void{
        this.garagem.push(carroParaAdd)
    }

    public geGCaragem(): void{
        for(let carrinho of this.garagem){
            carrinho.getCar()
            console.log('\n')
        }
    }
}