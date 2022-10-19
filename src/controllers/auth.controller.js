const Usuario = require("../models/usuarios.model")
const bcrypt = require("bcrypt")
const generartoken = require("../helpers/generartoken")
const ctrl = {}


ctrl.registrarse = async(req, res)=>{
    const {usuario, correo, contraseña} = req.body

    const contraseñaCifrada = bcrypt.hashSync(contraseña, 10)

    const usuarioExiste = await Usuario.findOne({
        usuario: req.body.usuario
    })
    if(usuarioExiste){
        res.json('Usuario ya registrado')
    }



    const nuevoUsuario = new Usuario({
        usuario,
        correo,
        contraseña: contraseñaCifrada
    })

    const guardarUsuario = await nuevoUsuario.save()

    if(!guardarUsuario){
        res.json("Error al crear usuario")
    }

    res.json("Usuario creado")
}

ctrl.login = async(req, res)=>{
    const {usuario, contraseña} = req.body

    const user = await Usuario.findOne({usuario})
    
    if(!user){
        res.json("Usuario no encontrado")
    }

    const validarContraseña = bcrypt.compareSync(contraseña, user.contraseña)

    if(!validarContraseña){
        res.json("Contraseña incorrecta")
    }

    const token = await generartoken({uid: user._id});

    res.json(token);

}

ctrl.buscarUsuario = async(req, res)=>{
   
    const buscar = await Usuario.findById(req.params.id)
    res.json({buscar, msg: "UsuarioEncontrado"})
} 



module.exports = ctrl