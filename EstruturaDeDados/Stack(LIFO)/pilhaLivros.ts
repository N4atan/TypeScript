let ask = require('readline-sync')


// Um exemplo mais lógico, prático

export class PilhaLivros{
    private livros: Array<string> = []

    public adicionar(livro: string):void        {  this.livros.push(livro); console.log(`O livro ${livro} foi adicionado a pilha ! \n`)                                    }
    public retirarUltimo(): string | undefined  {  return this.livros.length !== 0 ? this.livros.pop() : "A pilha está vazia!"                                             }
    public verUltimo(): string                  {  return this.livros.length > 0 ? this.livros[this.livros.length - 1] : "A pilha está vazia!"                             }
    public checarVazia(): boolean               {  return this.livros.length === 0                                                                                         } 
    public tamanho(): number                    {  return this.livros.length                                                                                               }
    public limpar(): void                       {  this.livros = []                                                                                                        }  

    public adicionarLoop(biblioteca: string[]): string {
        for (let i = 0; i < biblioteca.length; i++) {
            this.adicionar(biblioteca[i])
        }
        return ask.question("Press any key...")
    }

    public removerLoop(): string {
        while (this.tamanho() != 0) {
            console.log(this.retirarUltimo(), "--> Foi retirado\n")
        }
        return ask.question("Press any key...")
    }

}



const biblioteca = [
    "1984 - George Orwell",
    "Dom Quixote - Miguel de Cervantes",
    "O Senhor dos Anéis - J.R.R. Tolkien",
    "Orgulho e Preconceito - Jane Austen",
    "Cem Anos de Solidão - Gabriel García Márquez",
    "O Grande Gatsby - F. Scott Fitzgerald",
    "A Revolução dos Bichos - George Orwell",
    "Moby Dick - Herman Melville",
    "Crime e Castigo - Fiódor Dostoiévski",
    "O Apanhador no Campo de Centeio - J.D. Salinger"
]

let pilhaDeLivrosMinha = new PilhaLivros()


function main(estanteLivros: PilhaLivros) {
    while(true) {
        let checkEmpty = estanteLivros.checarVazia() ? "Yes" : "No"
        console.clear()
        console.log(`
                -------------------------------------
                - 1. Adicionar Livro                -
                - 2. Retirar e visualizar o ultimo  -
                - 3. Visualizar o ultimo            -
                - 4. Empty: ${checkEmpty.padEnd(24)}-
                - 4. Size: ${estanteLivros.tamanho()}   
                - 6. Clear                          -
                - 7. Adicionar Biblioteca           -
                - 8. Remover 1 por 1                -
                -------------------------------------
        `)
        let user = ask.questionInt('Qual desejas? ')

        switch(user) {
            case 1:
                let livro = ask.question('\nQual o titulo do livro que deseja adicionar? ')
                ask.question(estanteLivros.adicionar(livro))
                break

            case 2:
                ask.question(`O livro ${estanteLivros.retirarUltimo()} foi retirado`)
                break

            case 3:
                ask.question(`O ultimo livro e: ${estanteLivros.verUltimo()}`)
                break

            case 6:
                estanteLivros.limpar(); ask.question("Pilha Foi limpa! ")
                break

            case 7:
                estanteLivros.adicionarLoop(biblioteca)
                break
                
            case 8:
                estanteLivros.removerLoop()
                break
        }
    }
}
main(pilhaDeLivrosMinha)
