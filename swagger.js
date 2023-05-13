const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Week 04 API',
        description: 'Contacts API'
    },
    host: 'localhost:8080',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);