

export class NumeroComplexo {
    nReal: number
    nImaginario: number

    constructor(nReal: number, nImaginario: number){
        this.nReal =  nReal
        this.nImaginario = nImaginario
    }

    setReal(real): void{
        this.nReal = real
    }
    setImaginario(imaginario): void{
        this.nImaginario = imaginario
    }

    getReal(): number{
        return this.nReal
    }
    getImaginario(): number{
        return this.nImaginario
    }

    toString(): string{
        return `${this.nReal} + ${this.nImaginario}i`
    }

    equals(outroComplexo: NumeroComplexo): boolean{
        return this.nReal == outroComplexo.getReal() && this.nImaginario == outroComplexo.getImaginario()
    }

    modulo():number {
        //raiz quadrada de: (a*a) + (b*b)
        return Math.sqrt((this.nReal * this.nReal) + (this.nImaginario * this.nImaginario));
    }

    somar(outroComplexo: NumeroComplexo): NumeroComplexo{
        //(parte real + parte real) = g
        //(parte imaginaria + parte imaginaria) = h
        //g + h"i"

        let numeroRealNovo = (this.nReal + outroComplexo.getReal())
        let numeroImaginarioNovo = (this.nImaginario + outroComplexo.getImaginario())

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        console.log(`${newNumber.getReal()} + ${newNumber.toString()}`)
         
        return newNumber
    }

    sub(outroComplexo: NumeroComplexo): NumeroComplexo{
        //(parte real - parte real) = g
        //(parte imaginaria - parte imaginaria) = h
        //g + h"i"

        let numeroRealNovo = (this.nReal - outroComplexo.getReal())
        let numeroImaginarioNovo = (this.nImaginario - outroComplexo.getImaginario())

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        console.log(`${newNumber.getReal()} + ${newNumber.toString()}`)
         
        return newNumber
    }

    mult(outroComplexo: NumeroComplexo): NumeroComplexo{
        let numeroRealNovo = (this.nReal * outroComplexo.getReal()) - (this.nImaginario * outroComplexo.getImaginario())

        let numeroImaginarioNovo = (this.nReal * outroComplexo.getImaginario()) + (this.nImaginario * outroComplexo.getReal())

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        console.log(`${newNumber.getReal()} + ${newNumber.toString()}`)
         
        return newNumber
    }

    div(outroComplexo: NumeroComplexo): NumeroComplexo{
        let numeroRealNovo = ( ( (this.nReal * outroComplexo.getReal()) + (this.nImaginario * outroComplexo.getImaginario()) ) ) / ( ( (outroComplexo.getReal() ** 2) + (outroComplexo.getImaginario() ** 2) ) )

        let numeroImaginarioNovo = ( ( (this.nImaginario * outroComplexo.getReal()) - (this.nReal * outroComplexo.getImaginario()) ) / ( ( (outroComplexo.getReal() ** 2) + (outroComplexo.getImaginario() ** 2) ) ) )

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        console.log(`${newNumber.getReal()} + ${newNumber.toString()}`)
         
        return newNumber
    }
}   

let number1 = new NumeroComplexo(10, 5)
let number2 = new NumeroComplexo(20, 10)


let number3 = number1.somar(number2)
let number4 = number1.sub(number2)
let number5 = number1.mult(number2)
let number6 = number1.div(number2)

console.log(`
--------------------------
1 -> Numero Real 1: ${number1.toString()}
2 -> Numero Real 2: ${number2.toString()}
--------------------------
Soma: ${number3.toString()}
Subtrair: ${number4.toString()}
Multiplicação: ${number5.toString()}
Divisao: ${number6.toString()}
Modulo do Numero 1: ${number1.modulo()}
--------------------------
`)

