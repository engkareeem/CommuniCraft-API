const mongoose = require("mongoose");

const DB_CLUSTER = "softwarecluster"
const DB_SERVER = "lxpig9x"
const DB_MAIN = "dataset";
const { DB_USERNAME, DB_PASSWORD } = process.env

const DB_URI =  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.${DB_SERVER}.mongodb.net/${DB_MAIN}?retryWrites=true&w=majority`;



mongoose.connect(DB_URI);

module.exports = mongoose;