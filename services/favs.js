const fs = require("fs");

function getAllFavs() {
    return JSON.parse(fs.readFileSync("favs.json"))
}

function deleteFavsByID(id){
    console.log("entrou")
    const favs = JSON.parse( fs.readFileSync("favs.json") );

    const filtredFavs = favs.filter( fav => fav.id !== id);
    fs.writeFileSync("favs.json", JSON.stringify(filtredFavs))
}

function insertFav(id) {
    const books = JSON.parse( fs.readFileSync("books.json") );
    const favs = JSON.parse( fs.readFileSync("favs.json") );

    const newBookToInsert = books.find( book => book.id === id )

    fs.writeFileSync("favs.json", JSON.stringify( [...favs, newBookToInsert] ))
}
 
module.exports = {
    getAllFavs,
    deleteFavsByID,
    insertFav
}