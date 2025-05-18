const db = require('../config/db');

const AntecedentesAcademicos = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM antecedenteacademico');
            console.log('antecedenteacademico obtenidos:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron antecedentes academicos' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los antecedentes academicos:', err);
            throw err;
        }
    },

    create: async (antecedenteacademico) => {
        try {
            const [rows] = await db.query('INSERT INTO antecedenteacademico (candidato_id, institucion, titulo_obtenido, anio_ingreso, anio_egreso) VALUES (?, ?, ?, ?, ?)', [antecedenteacademico.candidato_id, antecedenteacademico.institucion, antecedenteacademico.titulo_obtenido, antecedenteacademico.anio_ingreso, antecedenteacademico.anio_egreso]);
            console.log('Antecedente academico creado:');
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico creado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear el Antecedente academico:', err);
            throw err;
        }
    },

    update: async (antecedenteacademico) => {
        try {
            const [rows] = await db.query('UPDATE antecedenteacademico SET institucion = ?, titulo_obtenido = ? WHERE candidato_id = ?', [antecedenteacademico.institucion, antecedenteacademico.nuevo_titulo_obtenido, antecedenteacademico.candidato_id]);
            console.log('Antecedente academico actualizado:');
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico actualizado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar el Antecedente academico:', err);
            throw err;
        }

    },

    remove: async (antecedenteacademico) => {
        try {
            const [rows] = await db.query('DELETE FROM antecedenteacademico WHERE candidato_id = ?', [antecedenteacademico.candidato_id]);
            console.log('Antecedente academico eliminado:');
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico eliminado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar el Antecedente academico:', err);
            throw err;
        }

    }

};

module.exports = AntecedentesAcademicos;