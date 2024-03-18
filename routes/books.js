const { Router, } = require("express");
const { getBooks, getBook, postBook } = require("../controllers/books")

const router = Router();

router.get("/", getBooks)

router.get("/:id", getBook)

router.post("/", postBook)

module.exports = router;