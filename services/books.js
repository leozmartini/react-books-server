const { log } = require("console");
const fs = require("fs");

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    return books.filter( book => book.id === id ) [0] // [0] pq o filtro exibe uma array com apenas o objeto filtrado
} 

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const newBooksList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBooksList))
}

function editBook(edits, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const targetObject = currentBooks.findIndex(book => book.id === id)

    currentBooks[targetObject] = { ...currentBooks[targetObject], ...edits } // Muda apenas o bloco contido em "edits"

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))

}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    editBook
}