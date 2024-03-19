const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model("Tool", toolSchema,"Tools");