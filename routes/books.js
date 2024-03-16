const { Router, } = require("express");
const { getBooks, getBook } = require("../controllers/books")

const router = Router();

router.get("/", getBooks)

router.get("/:id", getBook)


module.exports = router;