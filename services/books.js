const fs = require("fs");

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));

    return books.filter( book => book.id === id ) [0] // [0] pq o filtro exibe uma array com apenas o objeto filtrado
} 

module.exports = {
    getAllBooks,
    getBookById
}