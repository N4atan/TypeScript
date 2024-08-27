

let ask = require('readline-sync')

export interface Prova {
    constructor(gabarito: Gabarito);
    respostaAluno1(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}


export class Gabarito{
    letraAnswer: Array<string>
    pesoLetra: Array<number>

    constructor(){
        this.letraAnswer = []
        this.pesoLetra = []
    }

    public setGabarito():void {
        for(let i = 1; i <= 15; i++){
            let letter = ask.question(`\nQual a letra da resposta da questao numero ${i}? \nR:`).toUpperCase()
            this.letraAnswer.push(letter)

            if(i <= 10){
                this.pesoLetra.push(0.5)
            } else if(i > 10){
                this.pesoLetra.push(1)
            }
        }
        
        ask.question('Finish! Press any key for back to menu...')
    }

    public getGabaritoLetras():Array<string> {
        return this.letraAnswer
    }

    public getGabaritoValor(): Array<number> {
        return this.pesoLetra
    }
}

export class Prova {
    respostaAluno: Array<string>
    acertoss: number
    notaAluno: number
    gabarito: Gabarito

    constructor(gabarito: Gabarito){
        this.gabarito = gabarito
        this.respostaAluno = []
        this.notaAluno = 0
        this.acertoss = 0
    }

    setRespostaAluno1(resposta: string): void{
        this.respostaAluno.push(resposta)
    }

    getAcertos(): number{
        for(let a = 1; 0 <= 15; a++){
            if(this.respostaAluno[a] == this.gabarito.getGabaritoLetras[a]){
                this.acertoss += 1
            }
        }
        return this.acertoss
    }

    setnota():number {
        for(let i = 0; i <= 15; i++){
            let letterCorrect = this.gabarito.letraAnswer[i]
            let letterStuddent = this.respostaAluno[i]
            let pesoAcert = this.gabarito.pesoLetra[i]

            if(letterCorrect === letterStuddent){
                this.notaAluno += pesoAcert
            }
        }

        return this.notaAluno
    }

    getnota():number {
        return this.notaAluno
    }

    //ocmpara a nota atual com a de outra prova
    maior(outraProva: Prova): number {
        if(this.getnota() > outraProva.getnota()) return this.getnota()
        else return outraProva.getnota()
    }
}


