const express = require('express');
const bookRouter = require("./routes/books")

const app = express();

const port = 8000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/books', bookRouter)

app.listen(port, () => {
    console.log(`Online na porta: ${port}`)
})