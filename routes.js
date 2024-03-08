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

parentRouter.all('*', (req, res) => {
    let errorCode = 404
    utility.sendError(res, errorCode)
})

module.exports = parentRouter