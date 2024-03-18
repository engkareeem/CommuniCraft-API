const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {type: String, required: true},
    workers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}],
    dueDate: {type: Date, required: true},
    comments: [String]
});

module.exports = mongoose.model("Task", taskSchema,"Tasks");