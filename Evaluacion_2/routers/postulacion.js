const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   postulacionController.getAll(req, res);

});

router.get('/userPostulation', (req, res, next) => {
   postulacionController.listaPostulante(req, res);

});

router.post('/create', (req, res, next) => {
   postulacionController.create(req, res);
});

router.put('/update', (req, res, next) => {
   postulacionController.update(req, res);
});

router.delete('/remove', (req, res, next) => {
   postulacionController.remove(req, res);
});

router.put('/estado-comentario', (req, res, next) => {
   postulacionController.updateEstadoComentario(req, res);
});

module.exports = router;