require('dotenv').config();
const mysql = require('mysql2/promise');

//verfificar si existe la variable de entorno DB_HOST
const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_NAME'];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`falta variable: ${varName}`);
  }
});

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Conexión a la base de datos exitosa');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
}
module.exports = connectDB;