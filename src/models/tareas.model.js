const {Schema, model} = require("mongoose")

const schemaTareas = new Schema({
    titulo:{
        type: String,
        require: true,
    },
    descripcion:{
        type: String,
        require: true
    },
   userID: {
        type: Schema.Types.ObjectId,
        required: true
   },
   isActive: {
    type: Boolean,
    default: true
   },
   isDone: {
    type: Boolean,
    default: false
   }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("tareas", schemaTareas)