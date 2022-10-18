//importar dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const conectarDB = require('./src/bd/conexion');
require('dotenv').config();
conectarDB()

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//RUTAS
app.use(require("./src/routes/auth.routes"))
app.use(require("./src/routes/task.routes"))

//PUERTO
const port = 3000;

app.listen(port, ()=>{console.log(`Servidor corriendo en el puerto ${port}`)})


