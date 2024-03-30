const express = require('express');
const bookRouter = require("./routes/books")
const cors = require("cors")

const port = 8000;

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/books', bookRouter)

app.listen(port, () => {
    console.log(`Online na porta: ${port}`)
})