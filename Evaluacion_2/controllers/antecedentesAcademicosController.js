const AntecedentesAcademicos = require('../models/antecedentesAcademicos');

const getAll = async (req, res) => {
    try {
        const result = await AntecedentesAcademicos.getAll();
        console.log('resultado de la consulta AAC:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de antecedentes Academicos:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const create = async (req, res) => {
    try {
        const antecedenteacademico = req.body;
        const result = await AntecedentesAcademicos.create(antecedenteacademico);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de Antecedentes Academicos:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const update = async (req, res) => {
    try {
        const antecedenteacademico = req.body;
        const result = await AntecedentesAcademicos.update(antecedenteacademico);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de Antecedentes Academicos:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const remove = async (req, res) => {
    try {
        const antecedenteacademico = req.body;
        const result = await AntecedentesAcademicos.remove(antecedenteacademico);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de Antecedentes Academicos:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};



module.exports = {
    getAll, create, update, remove
}