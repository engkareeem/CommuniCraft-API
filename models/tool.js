const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    description: String,
});

module.exports = mongoose.model("Tool", toolSchema,"Tools");