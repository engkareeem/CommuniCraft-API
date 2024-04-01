const mongoose = require('mongoose')
const constants = require('./constants')
let projectSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: [true, 'Please provide the number of project workers']
    },
    difficulty: {
        type: String,
        required: [true, 'Please provide project difficulty'],
        validate: [constants.DIFFICULTY.Validate, 'Please provide a valid difficulty (Beginner, Novice, Intermediate, Advanced or Expert)']
    },
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materials',
        required: [true, 'Please provide project materials']
    }],
    workers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: [true, 'Please provide project workers']
    }],
    status: {
        type: String,
        required: [true, 'Please provide project difficulty'],
        validate: [constants.STATUS.Validate, 'Please provide a valid status (Not Started, In Progress or Finished)']
    },
    dueDate: {
        type: Date,
        required: [true, 'Please provide project due date']
    },
    isShared: Boolean,
    comments: [String],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks'
    }],
    location: String,
});

module.exports = mongoose.model("Project", projectSchema,"Projects");