const { Router } = require("express")
//Middleware only admin
const onlyAdmin = require("../middleware/adminAccess")
const Producto = require("../models/Producto")
const router = Router()



//localhost:3000/admin/dashboard

router.get("/dashboard", onlyAdmin, (req, res) => {
    res.render("admin/dashboard", { layout: false, userInSession: req.session.currentUser })
})

router.get("/dashboard/products", onlyAdmin, (req, res) => {
    Producto.find()
        .then(productos => {
            res.render("admin/products", { layout: false, userInSession: req.session.currentUser, productos })
        })
        .catch(err => {
            next(err)
        })
})

router.get("/dashboard/products/nuevo", onlyAdmin, (req, res) => {
    res.render("admin/newProduct", { layout: false, userInSession: req.session.currentUser })
})

router.get("/dashboard/products/edit/:id", onlyAdmin, async (req, res, next) => {
    try {
        const { id } = req.params
        const datos = await Producto.findById(id)
        res.render("admin/editProduct", { layout: false, userInSession: req.session.currentUser, datos })
    } catch (err) {
        next(err)
    }
})

router.post("/dashboard/products/nuevo", onlyAdmin, (req, res, next) => {
    console.log(req.body)
    //const { nombre, precio } = req.body
    //Verificas si existe etc.
    //Creamos nuestro nuevo producto

    Producto.create(req.body)
        .then((nuevoProducto) => {
            res.redirect("/admin/dashboard/products")
        })
        .catch(err => {
            next(err)
        })
})

//editar producto
router.post("/dashboard/products/edit/:id", onlyAdmin, (req, res, next) => {
    const { id } = req.params
    Producto.findByIdAndUpdate(id, req.body, { new: true })
        .then((productoActualizado) => {
            console.log(productoActualizado)
            res.redirect(`/admin/dashboard/products`)
        }).catch(err => next(err))
})

router.post("/dashboard/products/delete/:id", onlyAdmin, (req, res, next) => {
    const { id } = req.params
    console.log("Eliminando", id)

    Producto.findByIdAndDelete(id)
        .then(() => {
            //Redireccionar a la vista de productos
            //res.redirect("/admin/dashboard/products")

            //
            res.json(JSON.stringify({ eliminado: true }))
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;