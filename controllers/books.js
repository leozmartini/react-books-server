const { getAllBooks } = require("../services/books");


function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}