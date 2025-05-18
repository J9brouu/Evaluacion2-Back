const db = require('../config/db');

const utilsModels = {
    login: async (jsonBody) => {
        try {
            const [rows] = await db.query('SELECT * FROM usuario WHERE email = ? AND contraseña = ?', [jsonBody.email, jsonBody.contraseña]
            );
            return rows;
        } catch (err) {
            console.error('Error al eliminar el usuario:', err);
            throw err;
        }
    }
}

module.exports = utilsModels;