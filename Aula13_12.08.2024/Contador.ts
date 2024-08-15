

export class Contador{
    contador: number

    constructor(){
        this.contador = 0
    }

    zerar(): void{
        this.contador = 0
    }

    //++ (é igual a += 1) tbm tem o -- (é igual -= 1)
    incrementar(number: number): void{
        this.contador += number
    }
    
    valorAtual():number{
        return this.contador
    }
}


