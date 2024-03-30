const { getAllBooks, getBookById, insertBook, editBook, deleteBookById } = require("../services/books");
const { isIDPresent } = require("../services/validations");

const booksDataBase = getAllBooks()

function getBooks(req, res) {
    try {
        res.send(booksDataBase)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        
        if (isIDPresent(id, booksDataBase)) {
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
        if (!req.body.id) { res.status(422); res.send("Campo id é obrigatório.") }
        if (isIDPresent(req.body.id, booksDataBase)) { res.status(409); res.send("Este ID já está presente no banco de dados."); return}
        if (!req.body.name) { res.status(422); res.send("Campo nome é obrigatório."); return }

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
    
        if (isIDPresent(id, booksDataBase)) {
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
        
        if (isIDPresent(id, booksDataBase)) {
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