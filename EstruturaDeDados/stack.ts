//Exemplo de stack básico


export class Pilha<T> { //o T sign. type, especie de tipo generico especifico, já o any pode ser qualquer coisa generica
    private elementos: T[] = [] //um array de itens de T.

    //mesmo sendo function, nao é nome próprio... 
    //pushPilha (outro nome)...
    public push(item: T): void {
        this.elementos.push(item)
    }

    //tira o primeiro da lista e retorna
    public pop(): T | undefined {
        return this.elementos.pop()
    }

    //comando peek = mostra o ultimo elemento da pilha :)
    public peek(): T | undefined {
        return this.elementos[this.elementos.length - 1]
    }

    //retorna boolean para vazio ou nao
    public isEmpy(): boolean {
        return this.elementos.length === 0
    }

    //verifica o tamanho da pilha
    public size(): number {
        return this.elementos.length
    }

    //limpar a pilha
    public clear(): void {
        this.elementos = []
    }
}

let minhaPilha = new Pilha<number>()

console.warn("Pilha vazia?", minhaPilha.isEmpy())

minhaPilha.push(100)
console.log(minhaPilha.peek())

minhaPilha.push(55)
console.log(minhaPilha.peek())

minhaPilha.push(68)
console.log(minhaPilha.peek())

console.log("primeiro a ser add:", minhaPilha.pop())
console.log("tamanho:", minhaPilha.size())

minhaPilha.clear()


