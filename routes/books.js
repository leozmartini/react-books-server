const { Router, } = require("express");
const { getBooks, getBook, postBook, patchBook } = require("../controllers/books")

const router = Router();

router.get("/", getBooks)

router.get("/:id", getBook)

router.post("/", postBook)

router.patch("/:id", patchBook)

module.exports = router;