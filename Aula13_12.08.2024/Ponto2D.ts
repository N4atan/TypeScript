
export class Ponto2DBase{
    x: number
    y: number

    constructor(){
        this.x = 0
        this.y = 0
    }

    setX(valorx: number){
        this.x = valorx
    }
    setY(valory: number){
        this.y = valory
    }
    getX(): number{
        return this.x
    }
    getY():number{
        return this.y
    }

    toString(): string{
        return `
        X: ${this.x}
        Y: ${this.y}
        `
    }
    
    equals(outroPonto: Ponto2DBase): boolean{
        return this.x === outroPonto.getX() && this.y === outroPonto.getY()
    }

    /*
     distancia = raizV(x2 - x1) *2 + (y2 - y1)*2
    */
    distancia(outroPonto: Ponto2DBase):number {
        let dx = outroPonto.getX() - this.x
        let dy = outroPonto.getY() - this.y


        //serve para fazer raiz quadrada
        return Math.sqrt((dx * dx) + (dy * dy))
    }

    clone(): Ponto2DBase{
        return new Ponto2DBase()
    }
}

export class Ponto2DPadrao extends Ponto2DBase{
    constructor(x: number, y: number){
        super()
        this.setX(x)
        this.setY(y)
    }
}

export class Ponto22 extends Ponto2DBase{
    constructor(outroPonto: Ponto2DBase){
        super()
        this.setX(outroPonto.getX())
        this.setY(outroPonto.getY())
    }
}

let ponto1 = new Ponto2DBase()
let ponto2 = new Ponto2DPadrao(10, 10)
let ponto3 = new Ponto22(ponto2)