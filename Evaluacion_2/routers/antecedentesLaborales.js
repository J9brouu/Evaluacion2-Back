const express = require('express');
const router = express.Router();
const ancetecentesLaboralController = require('../controllers/ancetecentesLaboralController');

// rutas para la API de usuarios

/**
 * @swagger
 * tags:
 *   name: Antecedentes Laborales
 *   description: API para gestionar antecedentes laborales
 */

router.get('/', (req, res, next) => {
   ancetecentesLaboralController.getAll(req, res);
}
);

router.post('/create', (req, res, next) => {
   ancetecentesLaboralController.create(req, res);
});

router.put('/update', (req, res, next) => {
   ancetecentesLaboralController.update(req, res);
});

router.delete('/remove', (req, res, next) => {
   ancetecentesLaboralController.remove(req, res);
});


module.exports = router;