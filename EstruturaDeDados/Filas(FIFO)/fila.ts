//Funciona igual uma fila de verdade


export class Fila<T> {
    private elementos: T[] = []

    //Add a one element in the finish fila
    public enfileirar (item: T): void        { this.elementos.push(item) }
    
    //See the size of fila
    public size():               number      { return this.elementos.length }
    
    //Check if is empty
    public estaVazia():          boolean     { return this.elementos.length === 0 }

    //Clear
    public limpar(): void                 { this.elementos = []; return console.log('A fila foi limpa!')}


    //Remove and return the first element
    public desenfileirar (): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
        } else {
            console.log(this.elementos[0])
            return this.elementos.shift()
        }
    }


    //Return the first element
    public primeiro(): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está fazia! ");
        } else {
            return this.elementos[0]
        }
    }

    
}

