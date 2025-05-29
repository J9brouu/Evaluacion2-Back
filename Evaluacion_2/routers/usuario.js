const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// rutas para la API de usuarios

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestionar usuarios
 */

/**---------------------------------OPERACIONES--------------------------------- */

/**
 * @swagger
 *  /usuarios:
 *   get:
 *    summary: Obtener todos los usuarios
 *    tags: [Usuarios]
 *    responses:
 *     200:
 *      description: Lista de usuarios obtenida correctamente
 *     500:
 *      description: Error al obtener la lista de usuarios
 */

/**
 * @swagger
 *  /usuarios/create:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan
 *                 description: Nombre del usuario
 *               apellido:
 *                 type: string
 *                 example: Perez
 *               email:
 *                 type: string
 *               contraseña:
 *                 type: string
 *               rol:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       500:
 *         description: Error al crear el usuario
 */

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