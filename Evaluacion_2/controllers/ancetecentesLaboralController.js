const AntecentesLaboral = require('../models/antecedentesLaboral');

const getAll = async (req, res) => {
    try {
        const result = await AntecentesLaboral.getAll();
        console.log('resultado de la consulta:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const create = async (req, res) => {
    try {
        const antecedentelaboral = req.body;
        const result = await AntecentesLaboral.create(antecedentelaboral);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const update = async (req, res) => {
    try {
        const antecedentelaboral = req.body;
        const result = await AntecentesLaboral.update(antecedentelaboral);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const remove = async (req, res) => {
    try {
        const antecedentelaboral = req.body;
        const result = await AntecentesLaboral.remove(antecedentelaboral);
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
    getAll, update, create, remove
}