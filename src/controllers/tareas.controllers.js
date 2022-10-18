const Tareas = require("../models/tareas.model")
const ctrl = {}

ctrl.postTarea = async(req, res)=>{
    const {titulo, descripcion} = req.body

    const nuevaTarea = new Tareas({
        titulo,
        descripcion,
        userID: req.user._id
    })

    const guardarTarea = await nuevaTarea.save();

    if(!guardarTarea){
        res.json("No se pudo crear la tarea")
    }

    res.json("Tarea creada")
}

ctrl.getTarea = async(req,res)=>{
    const obtenerTarea = await Tareas.find({userID: req.user._id, isActive: true})

    res.json(obtenerTarea)
}

ctrl.putTarea = async(req, res)=>{
    const {titulo, descripcion} = req.body
    const id = req.params.id

    const actualizarTarea = await Tareas.findByIdAndUpdate(id, {titulo, descripcion})

    if(!actualizarTarea){
        res.json("No se pudo actualizar la tarea")
    }

    res.json("Tarea actulizada")
}

ctrl.deleteTarea = async(req, res)=>{
    const id = req.params.id
    const validacion = await Tareas.findOne({userID:req.user._id, _id:id})
    if(!validacion){
        return res.json("No está autorizado");
    }

    const eliminarTarea = await Tareas.findByIdAndUpdate(id, {isActive: false})

    if(!eliminarTarea){
        res.json("No se pudo eliminar la tarea")
    }

    res.json("Tarea eliminada")
}
module.exports = ctrl