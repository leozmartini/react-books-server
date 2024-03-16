const { getAllBooks, getBookById } = require("../services/books");


function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook
}