

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
        
         
        return newNumber
    }

    sub(outroComplexo: NumeroComplexo): NumeroComplexo{
        //(parte real - parte real) = g
        //(parte imaginaria - parte imaginaria) = h
        //g + h"i"

        let numeroRealNovo = (this.nReal - outroComplexo.getReal())
        let numeroImaginarioNovo = (this.nImaginario - outroComplexo.getImaginario())

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        
         
        return newNumber
    }

    mult(outroComplexo: NumeroComplexo): NumeroComplexo{
        let numeroRealNovo = (this.nReal * outroComplexo.getReal()) - (this.nImaginario * outroComplexo.getImaginario())

        let numeroImaginarioNovo = (this.nReal * outroComplexo.getImaginario()) + (this.nImaginario * outroComplexo.getReal())

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        
         
        return newNumber
    }

    div(outroComplexo: NumeroComplexo): NumeroComplexo{
        let numeroRealNovo = ( ( (this.nReal * outroComplexo.getReal()) + (this.nImaginario * outroComplexo.getImaginario()) ) ) / ( ( (outroComplexo.getReal() ** 2) + (outroComplexo.getImaginario() ** 2) ) )

        let numeroImaginarioNovo = ( ( (this.nImaginario * outroComplexo.getReal()) - (this.nReal * outroComplexo.getImaginario()) ) / ( ( (outroComplexo.getReal() ** 2) + (outroComplexo.getImaginario() ** 2) ) ) )

        let newNumber = new NumeroComplexo(numeroRealNovo, numeroImaginarioNovo)
        
         
        return newNumber
    }
}   


