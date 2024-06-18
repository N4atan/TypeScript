class Book{
    titule: string
    author: string
    yearOfRelease: number

    constructor(titule: string, author: string, yearOfRelease: number){
        this.titule = titule
        this.author = author
        this.yearOfRelease = yearOfRelease
    }

    getDetails(): string{
        return `the name of the book is:${this.titule}    \nits author is:${this.author}    \nit was released on:${this.yearOfRelease} `
    }
}

let book1 = new Book('O Ser e o Nada', 'Jean-Paul Satre', 1943)
let book2 = new Book('Alem do Bem e do Mal', 'Friedrich Nietzsche', 1886)

console.log(book1.getDetails())
'\n'
console.log(book2.getDetails())

