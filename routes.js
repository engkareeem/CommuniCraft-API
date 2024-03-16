const express = require('express')
const fs = require('fs');
const path = require('path');
const utility = require('./utility')

const rootRouter = express.Router()
const routesFolder = "./routes"


function readRoutesFolders(dirname,parentRouter) {
    fs.readdirSync(dirname).forEach(file => {
        const filePath = path.join(dirname, file);
        if (fs.statSync(filePath).isDirectory()) {
            let childParent = express.Router()
            let name = path.basename(filePath);
            let success = readRoutes(filePath, childParent);
            if(success) parentRouter.use(`/${name}`, childParent)
        }
    })
}
function readRoutes(dirname, parentRouter) {
    let success = false;
    fs.readdirSync(dirname).forEach(file => {
        success = true;
        const filePath = path.join(dirname, file);
        if (fs.statSync(filePath).isDirectory()) {
            const directoryRouter = express.Router();
            readRoutes(filePath, directoryRouter);
            parentRouter.use(`/`, directoryRouter);
        } else if (fs.statSync(filePath).isFile()) {
            const fileName = path.basename(file, path.extname(file));
            const childRouter = require(`./${dirname}/${fileName}`);
            parentRouter.use(`/`, childRouter);
        }
    });
    return success;
}


readRoutesFolders(routesFolder, rootRouter); // root files will be ignored


rootRouter.use((err, req, res, next) => { // error handler
    res.status(500).json({ // 500: internal server err
        message: err.message,
        error: err
    });
});
rootRouter.all('*', (req, res) => {
    let errorCode = 404
    utility.sendError(res, errorCode)
})

module.exports = rootRouter