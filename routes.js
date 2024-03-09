const express = require('express')
const fs = require('fs');
const path = require('path');
const utility = require('./utility')

const parentRouter = express.Router()
const routesFolder = "./routes"

fs.readdirSync(routesFolder).forEach(file => {
    const filePath = path.join(routesFolder, file);
    if (fs.statSync(filePath).isFile()) {
        let fileName = path.basename(file, path.extname(file));

        const childRouter = require(`./${routesFolder}/${fileName}`);
        parentRouter.use(`/${fileName}`, childRouter) // I don't really know why its gives warning :#

    }
});
parentRouter.use((err, req, res, next) => { // error handler
    res.status(500).json({ // 500: internal server err
        message: err.message,
        error: err
    });
});
parentRouter.all('*', (req, res) => {
    let errorCode = 404
    utility.sendError(res, errorCode)
})

module.exports = parentRouter