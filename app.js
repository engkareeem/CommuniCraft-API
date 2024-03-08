require("dotenv").config()

const db = require('./config/dbconnection')
const express = require('express')
const app = express()

const routers = require('./routes.js')

app.use("/", routers);

app.listen(8000)