const errorMessages = require("./config/errors");
const mongoose = require("mongoose");
module.exports = {
    sendError: function (res, code) {
        res.status(code)
        res.json({status: code,error: errorMessages[`ERR_${code}`]})
    },
    updateDoc: function (doc, data) {
        for (let field in data) {
            doc[field] = data[field];
        }
        return doc;
    },
    isValidId: function (id) {
        return mongoose.Types.ObjectId.isValid(id)
    },
}