const Postulacion = require('../models/postulacion');

const getAll = async (req, res) => {
    try {
        const result = await Postulacion.getAll();
        console.log('resultado de la consulta:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de Postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const create = async (req, res) => {
    try {
        const postulacion = req.body;
        const result = await Postulacion.create(postulacion);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const update = async (req, res) => {
    try {
        const postulacion = req.body;
        const result = await Postulacion.update(postulacion);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const remove = async (req, res) => {
    try {
        const postulacion = req.body;
        const result = await Postulacion.remove(postulacion);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const listaPostulante = async (req, res) => {
    try {
        const result = await Postulacion.listaPostulante();
        console.log('resultado de la consulta:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de Postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const updateEstadoComentario = async (req, res) => {
    try {
        const { candidato_id, oferta_laboral_id, estado_postulacion, comentario } = req.body;
        const result = await Postulacion.updateEstadoComentario(
            candidato_id,
            oferta_laboral_id,
            estado_postulacion,
            comentario
        );
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getAll, create, update, remove, listaPostulante, updateEstadoComentario
}