const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    name: String,
    description: String,
});
module.exports = mongoose.model("Material", materialSchema,"Materials");