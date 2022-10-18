const mongoose = require("mongoose")

const conectarDB =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Base de datos conectada"))
    .catch((error)=>console.log(error))
}

module.exports = conectarDB