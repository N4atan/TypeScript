import { Fila } from "./fila";
let ask = require("readline-sync")

let minhaFila = new Fila<string>

function main(filaDoBanco: Fila<string>) {
    while(true) {
        let checkEmpty = filaDoBanco.estaVazia() ? "Yes" : "No"
        console.clear()
        console.log(`
                -------------------------------------
                - 1. Adicionar Cliente              -
                - 2. Retirar e visualizar primeiro  -
                - 3. Visualizar o primero           -
                - 4. Empty: ${checkEmpty.padEnd(24)}-
                - 4. Size: ${filaDoBanco.size()}   
                -------------------------------------
        `)
        let user = ask.questionInt('Qual desejas? ')

        switch(user) {
            case 1:
                let cliente = ask.question('\nQual o nome do cliente que deseja adicionar? ')
                filaDoBanco.enfileirar(cliente)
                ask.question("Adicionado! ...  ")
                break

            case 2:
                filaDoBanco.desenfileirar()
                ask.question(`...`)
                break

            case 3:
                ask.question(`O primeiro cliente e: ${filaDoBanco.primeiro()}`)
                break

        }
    }
}

main(minhaFila)