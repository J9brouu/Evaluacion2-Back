const db = require('../config/db');

const Usuarios = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM usuario');
            console.log('usuarios obtenidos:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron usuarios' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los usuarios:', err);
            throw err;
        }
    },

    create: async (usuario) => {
        try {
            const [rows] = await db.query('INSERT INTO usuario (nombre, apellido, email, contraseña, fecha_nacimiento, telefono, direccion,rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña, usuario.fecha_nacimiento, usuario.telefono, usuario.direccion, usuario.rol]);
            console.log('Usuario creado:');
            if (rows.affectedRows > 0) {
                return { message: 'usuario creado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear el usuario:', err);
            throw err;
        }
    },

    /*update: async (usuario) => {
        try {
            const [rows] = await db.query('UPDATE usuario SET nombre = ?, apellido = ?, email = ?, contraseña = ?, rol = ?, estado = ? WHERE id = ?', [usuario.nombre, usuario.apellido, usuario.email_nuevo, usuario.contraseña, usuario.rol, usuario.estado, usuario.id]);
            console.log('Usuario actualizado:');
            if (rows.affectedRows > 0) {
                return { message: 'usuario actualizado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar el usuario:', err);
            throw err;
        }

    },*/

    update: async (usuario) => {
    try {
        const campos = [];
        const valores = [];

        if (usuario.nombre !== undefined) {
            campos.push('nombre = ?');
            valores.push(usuario.nombre);
        }
        if (usuario.apellido !== undefined) {
            campos.push('apellido = ?');
            valores.push(usuario.apellido);
        }
        if (usuario.email !== undefined) {
            campos.push('email = ?');
            valores.push(usuario.email);
        }
        if (usuario.contraseña !== undefined) {
            campos.push('contraseña = ?');
            valores.push(usuario.contraseña);
        }
        if (usuario.rol !== undefined) {
            campos.push('rol = ?');
            valores.push(usuario.rol);
        }
        if (usuario.estado !== undefined) {
            campos.push('estado = ?');
            valores.push(usuario.estado);
        }

        if (campos.length === 0) {
            return { message: 'No se enviaron campos para actualizar' };
        }

        valores.push(usuario.id); // Para el WHERE

        const sql = `UPDATE usuario SET ${campos.join(', ')} WHERE id = ?`;
        const [rows] = await db.query(sql, valores);

        if (rows.affectedRows > 0) {
            return { message: 'usuario actualizado exitosamente' };
        }
        return { message: 'Usuario no encontrado o sin cambios' };
    } catch (err) {
        console.error('Error al actualizar el usuario:', err);
        throw err;
    }
},

    remove: async (usuario) => {
        try {
            const [rows] = await db.query('DELETE FROM usuario WHERE id = ?', [usuario.id]);
            console.log('Usuario eliminado:');
            if (rows.affectedRows > 0) {
                return { message: 'usuario eliminado exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar el usuario:', err);
            throw err;
        }

    },

    desactiveUser: async (usuario) => {
        try {
            // LOGIN
            const [rows] = await db.query('SELECT * FROM usuario WHERE email = ? AND contraseña = ?', [usuario.email, usuario.contraseña]);
            console.log(rows[0].estado)
            console.log(rows[0].rol)
            if (rows.length > 0) {
                // VALIDAMOS ROL y el estado del Reclutador
                if (rows[0].rol == "Reclutador" && rows[0].estado == "activo") {
                    // ACTUALIZAR ESTADO
                    const [update] = await db.query('UPDATE usuario SET estado = ? WHERE email = ?', [usuario.estado, usuario.email_modificar]);
                    if (update.affectedRows == 1) {
                        return { message: `Usuario ${usuario.email_modificar} actualizado exitosamente` };
                    }
                    return update;
                }
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar el usuario:', err);
            throw err;
        }
    },
};

module.exports = Usuarios;