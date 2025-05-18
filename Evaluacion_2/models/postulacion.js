const db = require('../config/db');

const Postulacion = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM postulacion');
            console.log('postulaciones obtenidas:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron postulaciones' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los postulaciones:', err);
            throw err;
        }
    },

    create: async (postulacion) => {
        try {
            const [rows] = await db.query('INSERT INTO postulacion (candidato_id, oferta_laboral_id, estado_postulacion, fecha_postulacion, fecha_actualizacion, comentario) VALUES (?, ?, ?, ?, ?, ?)', [postulacion.candidato_id, postulacion.oferta_laboral_id, postulacion.estado_postulacion, postulacion.fecha_postulacion, postulacion.fecha_actualizacion, postulacion.comentario]);
            console.log('postulacion creada:');
            if (rows.affectedRows > 0) {
                return { message: 'postulacion creada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear la postulacion:', err);
            throw err;
        }
    },

    update: async (postulacion) => {
        try {
            const [rows] = await db.query('UPDATE postulacion SET candidato_id = ?, oferta_laboral_id = ?, estado_postulacion = ?, fecha_actualizada = ? WHERE candidato_id = ? AND oferta_laboral_id = ?', [postulacion.candidato_id, postulacion.oferta_laboral_id, postulacion.nuevo_estado_postulacion, postulacion.nueva_fecha_actualizada, postulacion.candidato_id, postulacion.oferta_laboral_id]);
            console.log('postulacion actualizada:');
            if (rows.affectedRows > 0) {
                return { message: 'postulacion actualizada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar la postulacion:', err);
            throw err;
        }

    },

    remove: async (postulacion) => {
        try {
            const [rows] = await db.query('DELETE FROM postulacion WHERE candidato_id = ? AND oferta_laboral_id = ?', [postulacion.candidato_id, postulacion.oferta_laboral_id]);
            console.log('postulacion eliminada:');
            if (rows.affectedRows > 0) {
                return { message: 'postulacion eliminada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar la postulacion:', err);
            throw err;
        }

    },

    listaPostulante: async () => {
        try {
            const [rows] = await db.query('SELECT p.*, u.nombre, u.apellido FROM postulacion p JOIN usuario u ON p.candidato_id = u.id');
            console.log('postulaciones obtenidas:');
            if (rows.length === 0) {
                return { message: 'No se encontraron postulaciones' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los postulaciones:', err);
            throw err;
        }
    },

    updateEstadoComentario: async (candidato_id, oferta_laboral_id, estado_postulacion, comentario) => {
    try {
        const campos = [];
        const valores = [];

        if (estado_postulacion !== undefined) {
            campos.push('estado_postulacion = ?');
            valores.push(estado_postulacion);
        }
        if (comentario !== undefined) {
            campos.push('comentario = ?');
            valores.push(comentario);
        }

        if (campos.length === 0) {
            return { message: 'No se enviaron campos para actualizar' };
        }

        valores.push(candidato_id, oferta_laboral_id);

        const sql = `UPDATE postulacion SET ${campos.join(', ')} WHERE candidato_id = ? AND oferta_laboral_id = ?`;
        const [rows] = await db.query(sql, valores);

        if (rows.affectedRows > 0) {
            return { message: 'postulacion actualizada exitosamente' };
        }
        return { message: 'No se encontró la postulación o no hubo cambios' };
    } catch (err) {
        console.error('Error al actualizar la postulacion:', err);
        throw err;
    }
},


};

module.exports = Postulacion;