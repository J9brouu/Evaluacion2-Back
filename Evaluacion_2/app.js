const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Cargar las varibles de entorno del archivo .env

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

//Middleware para registrar las solicitudes entrantes
app.use((req, res, next) => {
    console.log('solicitud entrante:' + req.method + ' ' + req.url);
    next();
});

//Importar las rutas de los diferentes modulos en el archivo index.js
const routes = require('./routers/index');
//Asociar las rutas importadas a sus respectivos endpoints
app.use('/api', routes);

//Middleare para manejar errores
app.use((err, req, res, next) => {
    console.error('error en la aplicacion: ', err.message);
    res.status(500).json({
        error: 'error interno del servidor'
    });
});

//inciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('servidor escuchando en el puerto ${PORT}');
    console.log('url de la api: http://localhost:${PORT}/api');
});
