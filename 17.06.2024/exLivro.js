var Book = /** @class */ (function () {
    function Book(titule, author, yearOfRelease) {
        this.titule = titule;
        this.author = author;
        this.yearOfRelease = yearOfRelease;
    }
    Book.prototype.getDetails = function () {
        return "the name of the book is:".concat(this.titule, "    \nits author is:").concat(this.author, "    \nit was released on:").concat(this.yearOfRelease, " ");
    };
    return Book;
}());
var book1 = new Book('O Ser e o Nada', 'Jean-Paul Satre', 1943);
var book2 = new Book('Alem do Bem e do Mal', 'Friedrich Nietzsche', 1886);
console.log(book1.getDetails());
'\n';
console.log(book2.getDetails());
