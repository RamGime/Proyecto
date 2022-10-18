const {Schema, model} = require("mongoose")

const schemaUsuario = new Schema({
    usuario:{
        type: String,
        require: true,
        min: 4,
        max: 16
    },
    correo:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true,
        min: 8,
        max: 16
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("usuarios", schemaUsuario)