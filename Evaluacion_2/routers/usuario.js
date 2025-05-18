const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   usuarioController.getAll(req, res);

});

router.post('/create', (req, res, next) => {
   usuarioController.create(req, res);
});

router.put('/update', (req, res, next) => {
   usuarioController.update(req, res);
});

router.delete('/remove', (req, res, next) => {
   usuarioController.remove(req, res);
});

router.put('/desactiveUser', (req, res, next) => {
   usuarioController.desactiveUser(req, res);
});


module.exports = router;