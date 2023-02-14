//Definir el sistema de rutas

const { Router } = require("express")

const router = Router()


//Lista de todos los productos
//localhost:3000/products
router.get("/", (req, res) => {
    res.render("products/list", { userInSession: req.session.currentUser })
})


module.exports = router