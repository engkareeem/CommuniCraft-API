const errorMessages = require("./config/errors");
module.exports = {
    sendError: function (res, code) {
        res.status(code)
        res.json({status: code,error: errorMessages[`ERR_${code}`]})
    }
}