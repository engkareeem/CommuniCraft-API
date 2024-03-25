const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
    title: 'CommuniCraft API',
    version: '1.0.0',
    description: 'The full detailed documentation about Communicraft API endpoints',
    },
};

const options = {
    swaggerDefinition,
    swaggerOptions: {
        authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
      },
    apis: ['./docs/*.js', './docs/*/*.js']
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;