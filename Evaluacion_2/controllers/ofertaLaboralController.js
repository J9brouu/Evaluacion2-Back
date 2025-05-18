const OfertaLaboral = require('../models/ofertaLaboral');

const getAll = async (req, res) => {
    try {
        const result = await OfertaLaboral.getAll();
        console.log('resultado de la consulta:', result);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de Ofertas Laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const create = async (req, res) => {
    try {
        const ofertalaboral = req.body;
        const result = await OfertaLaboral.create(ofertalaboral);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const update = async (req, res) => {
    try {
        const ofertalaboral = req.body;
        const result = await OfertaLaboral.update(ofertalaboral);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

const remove = async (req, res) => {
    try {
        const ofertalaboral = req.body;
        const result = await OfertaLaboral.remove(ofertalaboral);
        res.status(200).json(result);
    }
    catch (err) {
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};


const crearOfertaReclutador = async (req, res) => {
    try {
        const result = await OfertaLaboral.crearOfertaLaboral(req.body);
        // console.log('resultado de la consulta:', result);
        res.status(200).json(result);
        
    } catch (err) {
        console.error('Error al obtener los ofertas laborales :', err);
        return res.status(500).json({error: 'Error interno del servidor'});
    }
};


const updateOfertaLaboral = async (req, res) => {
  try {
        const result = await OfertaLaboral.updateOfertaLaboral(req.body);
        // console.log('resultado de la consulta:', result);
        res.status(200).json(result);
        
    } catch (err) {
        console.error('Error al obtener los ofertas laborales :', err);
        return res.status(500).json({error: 'Error interno del servidor'});
    }
};



module.exports = {
    getAll, update, create, remove, crearOfertaReclutador, updateOfertaLaboral
}