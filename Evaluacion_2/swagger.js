const swaggerJSDOC = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'EVALUACION 3',
    version: '1.0.0',
    description: 'Documentación de la API para la Evaluación 3',
  },
  servers: [
    {
      url: 'http://localhost:3001/api', // Cambia esto según tu entorno
      description: 'Servidor de desarrollo',
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ['./routers/*.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDOC(options)
module.exports = swaggerSpec;
