const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    description: String,
});
module.exports = mongoose.model("Material", materialSchema,"Materials");