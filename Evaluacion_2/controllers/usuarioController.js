const Usuarios = require('../models/usuario');

const getAll = async (req, res) => {
    try {
        const result = await Usuarios.getAll();
        console.log('resultado de la consulta:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const create = async (req, res) => {
    try {
        const usuario = req.body;
        const result = await Usuarios.create(usuario);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const update = async (req, res) => {
    try {
        const usuario = req.body; // El id debe venir en el body
        const result = await Usuarios.update(usuario);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};


const remove = async (req, res) => {
    try {
        const usuario = req.body;
        const result = await Usuarios.remove(usuario);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const desactiveUser = async (req, res) => {
    try {
        const usuario = req.body;
        const result = await Usuarios.desactiveUser(usuario);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};


module.exports = {
    getAll, create, update, remove, desactiveUser
}