const router = require("express").Router()

const { registrarse, login } = require("../controllers/auth.controller")

router.post("/registro", registrarse)

router.post("/login", login)



module.exports = router