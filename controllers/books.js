const { getAllBooks, getBookById, insertBook, editBook, deleteBookById } = require("../services/books");


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

function postBook(req, res) {
    try {
        insertBook(req.body)
        res.status(201)
        res.send("Novo livro registrado com sucesso")
    } catch (error) {
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        editBook(req.body, req.params.id)
        res.send("Editado com sucesso.")
    } catch (error) {
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        deleteBookById(req.params.id)
        res.send("Deletado com sucesso")
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}