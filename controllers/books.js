const { getAllBooks, getBookById, insertBook, editBook, deleteBookById } = require("../services/books");
const { isIDPresent } = require("../services/validations");


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
        const books = getAllBooks()

        if (isIDPresent(id, books)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(404)
            res.send("ID não encontrado no banco de dados.")
        }
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
        const id = req.params.id
        const books = getAllBooks()

        if (isIDPresent(id, books)) {
            editBook(req.body, id)
            res.send("Editado com sucesso.")
        } else {
            res.status(404)
            res.send("Id não encontrado no banco de dados.")
        }
        
    } catch (error) {
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id
        const books = getAllBooks()

        if (isIDPresent(id, books)) {
            deleteBookById(req.params.id)

            res.send("Deletado com sucesso.")
        } else {
            res.status(404)
            res.send("Id não encontrado no banco de dados.")
        }

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