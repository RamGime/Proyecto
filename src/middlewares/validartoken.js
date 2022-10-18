const jwt = require("jsonwebtoken")
const Usuario = require("../models/usuarios.model")

const validarToken = async(req, res, next)=>{
    
    const token = req.headers.token

    if(!token){
        res.json("No se encontro el token")
    }

    const {uid} = jwt.verify(token, process.env.SECRET)

    const usuario = await Usuario.findById(uid)

    if(!usuario){
        res.json("No se encontro un usuario")
    }

    req.user = usuario

    next()

}

module.exports = validarToken