const { getAllFavs, insertFav, deleteFavsByID } = require("../services/favs");
const { isIDPresent } = require("../services/validations");

function getFavs(req, res) {
    try {
        res.status(200);
        res.send(getAllFavs())
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFav(req, res) {
    try {
        const id = req.params.id
        const favs = getAllFavs()

        if (isIDPresent(id, favs)) { res.status(409); res.send("O ID já pertence aos favoritos."); return}
            
        insertFav(id)
        res.status(201)
        res.send("Novo favorito registrado com sucesso")

    } catch (error) {
        res.send(error.message)
    }
}

function deleteFav(req, res) {
    try {
        const id = req.params.id
        const favs = getAllFavs()
        if (isIDPresent(id, favs)) {
            deleteFavsByID(req.params.id)

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
    getFavs,
    postFav,
    deleteFav
}