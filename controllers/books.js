function getBooks(req, res) {
    try {
        res.send(" books ")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}