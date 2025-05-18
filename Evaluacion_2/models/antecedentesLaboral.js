const db = require('../config/db');

const AntecentesLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM antecedentelaboral');
            console.log('antecedente laboral obtenido:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron antecedentes laborales' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los antecedentes laborales:', err);
            throw err;
        }
    },

    create: async (antecedentelaboral) => {
        try {
            const [rows] = await db.query('INSERT INTO antecedentelaboral (candidato_id, empresa, cargo, funciones, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?, ?)', [antecedentelaboral.candidato_id, antecedentelaboral.empresa, antecedentelaboral.cargo, antecedentelaboral.funciones, antecedentelaboral.fecha_inicio, antecedentelaboral.fecha_termino]);
            console.log('antecedente laboral creado:');
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral creado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear el antecedente laboral:', err);
            throw err;
        }
    },

    update: async (antecedentelaboral) => {
        try {
            const [rows] = await db.query('UPDATE antecedentelaboral SET empresa = ?, cargo = ?, funciones = ? WHERE candidato_id = ?', [antecedentelaboral.empresa, antecedentelaboral.nuevo_cargo, antecedentelaboral.nueva_funciones, antecedentelaboral.candidato_id]);
            console.log('antecedente laboral actualizado:');
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral actualizado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar el antecedente laboral:', err);
            throw err;
        }

    },

    remove: async (antecedentelaboral) => {
        try {
            const [rows] = await db.query('DELETE FROM antecedentelaboral WHERE candidato_id = ?', [antecedentelaboral.candidato_id]);
            console.log('antecedente laboral eliminado:');
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral eliminado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar el antecedente laboral:', err);
            throw err;
        }

    }


};

module.exports = AntecentesLaboral;