const express = require('express');
const router = express.Router();

//importar las rutas de los diferentes modulos

const usuarioRoutes = require('./usuario');
const antecedentesLaboralesRoutes = require('./antecedentesLaborales');
const antecedentesAcademicosRoutes = require('./antecedentesAcademicos');
const ofertaLaboralRoutes = require('./ofertaLaboral');
const postulacionRoutes = require('./postulacion');

//ascociar las rutas importadas a sus respectivos endpoints
router.use('/usuarios', usuarioRoutes);
router.use('/antecedentesLaborales', antecedentesLaboralesRoutes);
router.use('/antecedentesAcademicos', antecedentesAcademicosRoutes);
router.use('/ofertasLaboral', ofertaLaboralRoutes);
router.use('/postulaciones', postulacionRoutes);

//Middleware para capturar rutas no manejadas en este archivo
router.use((req, res) => {
    console.error('ruta no orquestada en index.js' + req.method + ' ' + req.url);
    res.status(404).json({
        error: 'ruta no encontrada'
    });
}
)

module.exports = router;