require("dotenv").config()

const db = require('./config/dbconnection')
const express = require('express')
const routers = require('./routes.js')
const cookieParser = require("cookie-parser")
const app = express()
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

// Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json());
app.use(cookieParser());
app.use("/", routers);



app.listen(8000)