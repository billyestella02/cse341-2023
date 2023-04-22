const express = require('express');

const app = express();

const port = 3000;

const mainRoute = require('./routes/index');

app.use('/billyestella', mainRoute);

app.listen(process.env.port || port);
console.log("Web server is listening at port " + (process.env.port || port));
