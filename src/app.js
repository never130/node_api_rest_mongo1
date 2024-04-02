// Importacion de modulos
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')
const bookRoutes = require('./routes/book.routes')


// Configuracion de dotenv
config()


// Creación de la aplicación Express
const app = express();


// Configuracion de middlewares
app.use(bodyParser.json());


// Conexion a la Base de Datos
mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME
});
const db = mongoose.connection;


// Configuracion de rutas
app.use('/books', bookRoutes);


// Configuracion del puerto
const port = process.env.PORT || 3000


// Inicio del servidor
app.listen(port, () => {
    console.log(`Server initialized on port ${port}`);
});
