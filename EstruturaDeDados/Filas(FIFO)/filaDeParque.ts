let ask = require('readline-sync')

//uma fila de tras pra frente :)
export class FilaDeParque{
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void{
        this.pessoas.unshift(nome)
        //insere no início do vetor, ao invés do final
    }

    public atender(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas.pop()
        //retira do fim do vetor
    }

    public proximaNaFila(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas[this.pessoas.length - 1]
    }

    public estaVazia(): boolean{
        return this.pessoas.length === 0
    }

    public tamanho(): number{
        return this.pessoas.length
    }
}


//Att: Criar menu switch case
let filaDoParque = new FilaDeParque()

function main(algumaFila: FilaDeParque) {
    while(true) {
        let checkEmpty = algumaFila.estaVazia() ? "Yes" : "No"

        console.clear()

        console.log(`
                -------------------------------------
                - 1. Adicionar Pessoa               -
                - 2. Atender o primeiro             -
                - 3. Visualizar o primero           -
                - 4. Empty: ${checkEmpty.padEnd(24)}-
                - 5. Size: ${algumaFila.tamanho()}   
                -------------------------------------
        `)

        let user = ask.questionInt('Qual desejas? ')

        switch(user) {
            case 1:
                let cliente = ask.question('\nQual o nome do cliente que deseja adicionar? ')
                algumaFila.entrarNaFila(cliente)
                ask.question("Adicionado! ...  ")
                break

            case 2:
                ask.question(`Atendendo: ${algumaFila.proximaNaFila()} \n... `)
                algumaFila.atender()
                break

            case 3:
                ask.question(`O primeiro cliente e: ${algumaFila.proximaNaFila()}`)
                break
        }
    }
}

main(filaDoParque)