const express = require('express');
const router = express.Router();
const antecedentesAcademicosController = require('../controllers/antecedentesAcademicosController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   antecedentesAcademicosController.getAll(req, res);

}
);

router.post('/create', (req, res, next) => {
   antecedentesAcademicosController.create(req, res);
});

router.put('/update', (req, res, next) => {
   antecedentesAcademicosController.update(req, res);
});

router.delete('/remove', (req, res, next) => {
   antecedentesAcademicosController.remove(req, res);
});


module.exports = router;