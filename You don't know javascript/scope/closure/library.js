var books = [
    {
        name: "5 am club",
        code: 905
    },
    {
        name: "48 Laws of power",
        code: 906
    },
    {
        name: "Alchemist",
        code: 907
    },
    {
        name: "The art of war",
        code: 908
    }
]
function bookLibrary(bookId) {
    for (let book of books) {
        if (book.code == bookId)
        {
            return { name: book.name}
        }
    }
}
var getBook = bookLibrary(908);
console.log(getBook)