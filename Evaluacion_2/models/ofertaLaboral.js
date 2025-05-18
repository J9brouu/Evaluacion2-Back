const db = require('../config/db');
const modelsUtils = require('./utilsModels');

const OfertaLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM ofertalaboral');
            console.log('oferta laboral obtenida:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron ofertas laborales' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los oferta laboral:', err);
            throw err;
        }
    },

    create: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('INSERT INTO ofertalaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [ofertalaboral.titulo, ofertalaboral.descripcion, ofertalaboral.ubicacion, ofertalaboral.salario, ofertalaboral.tipo_contrato, ofertalaboral.fecha_publicacion, ofertalaboral.fecha_cierre, ofertalaboral.estado, ofertalaboral.reclutador_id]);
            console.log('oferta laboral creada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral creada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear la oferta laboral:', err);
            throw err;
        }
    },

    update: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('UPDATE ofertalaboral SET titulo = ?, salario = ?, fecha_publicacion = ? WHERE reclutador_id = ?', [ofertalaboral.titulo, ofertalaboral.salario, ofertalaboral.fecha_publicacion, ofertalaboral.reclutador_id]);
            console.log('oferta laboral actualizada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral actualizada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar la oferta laboral:', err);
            throw err;
        }

    },

    remove: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('DELETE FROM ofertalaboral WHERE titulo = ? AND reclutador_id = ?', [ofertalaboral.titulo, ofertalaboral.reclutador_id]);
            console.log('oferta laboral eliminada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral eliminada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }

    },
    
    crearOfertaLaboral: async (jsonBody) => {
        try {
            console.log('jsonBody:', jsonBody);
            let user = await modelsUtils.login(jsonBody);

                if (user[0].rol == "Reclutador" && user[0].estado == "Activo") {
                    // Crear oferta laboral
                    const [row] = await db.query('INSERT INTO ofertalaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?,?,?,?,?,?,?,?,?);', [jsonBody.titulo, jsonBody.descripcion, jsonBody.ubicacion, jsonBody.salario, jsonBody.tipo_contrato, jsonBody.fecha_publicacion, jsonBody.fecha_cierre, jsonBody.estado, user[0].id]
                    );
                    if (row.affectedRows > 0) {
                        return { message: "Oferta laboral creada exitosamente reclutador: " + user[0].email};
                    }
                    return row;
                }
                else {
                    return { message: "El usuario no es un reclutador o su estado no es activo" };
                }
        } catch (err) {
            console.error('Error al eliminar el usuario:', err);
            throw err;
        }
    },
 
    updateOfertaLaboral: async (jsonBody) => {
    try {
        console.log('jsonBody:', jsonBody);
        let user = await modelsUtils.login(jsonBody);

        if (user[0].rol == "Reclutador" && user[0].estado == "Activo") {
            // Construir consulta dinámica
            const campos = [];
            const valores = [];

            if (jsonBody.titulo !== undefined) {
                campos.push('titulo = ?');
                valores.push(jsonBody.titulo);
            }
            if (jsonBody.descripcion !== undefined) {
                campos.push('descripcion = ?');
                valores.push(jsonBody.descripcion);
            }
            if (jsonBody.ubicacion !== undefined) {
                campos.push('ubicacion = ?');
                valores.push(jsonBody.ubicacion);
            }
            if (jsonBody.salario !== undefined) {
                campos.push('salario = ?');
                valores.push(jsonBody.salario);
            }
            if (jsonBody.tipo_contrato !== undefined) {
                campos.push('tipo_contrato = ?');
                valores.push(jsonBody.tipo_contrato);
            }
            if (jsonBody.fecha_publicacion !== undefined) {
                campos.push('fecha_publicacion = ?');
                valores.push(jsonBody.fecha_publicacion);
            }
            if (jsonBody.fecha_cierre !== undefined) {
                campos.push('fecha_cierre = ?');
                valores.push(jsonBody.fecha_cierre);
            }
            if (jsonBody.estado !== undefined) {
                campos.push('estado = ?');
                valores.push(jsonBody.estado);
            }

            if (campos.length === 0) {
                return { message: "No se enviaron campos para actualizar" };
            }

            valores.push(jsonBody.id); // id para el WHERE

            const sql = `UPDATE ofertalaboral SET ${campos.join(', ')} WHERE id = ?;`;
            const [row] = await db.query(sql, valores);

            if (row.affectedRows > 0) {
                return { message: "Oferta laboral actualizada exitosamente reclutador: " + user[0].email };
            }
            return row;
        } else {
            return { message: "El usuario no es un reclutador o su estado no es activo" };
        }
    } catch (err) {
        console.error('Error al actualizar la oferta laboral:', err);
        throw err;
    }
}
};

module.exports = OfertaLaboral;