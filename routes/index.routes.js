const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

const fileUploader = require("../config/cloudinary.config")


console.log(fileUploader)
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { userInSession: req.session.currentUser });
});


//Profile

router.get("/profile/:id", (req, res, next) => {

  const { id } = req.params
  User.findById(id)
    .then(datos => {
      res.render("profile", { userInSession: req.session.currentUser, datos })
    })
    .catch(err => next(err))
})


router.post('/profile/:id', fileUploader.single("foto"), (req, res, next) => {
  const { id } = req.params
  console.log(req.body)
  console.log(req.file)
  //Hacemos una copia del body y le agregamos la url de CLOUDINARY
  const datos = { ...req.body, foto: req.file.path }
  User.findByIdAndUpdate(id, datos, { new: true })
    .then((newData) => {
      req.session.currentUser = newData
      // Remove the password field
      delete req.session.currentUser.password;
      res.redirect(`/profile/${id}`)
    })
    .catch(err => next(err))

})

module.exports = router;
