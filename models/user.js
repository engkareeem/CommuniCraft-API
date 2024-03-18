const mongoose = require('mongoose')
const { isEmail } = require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    age: Number,
    gender: Boolean, // true: male, (f)alse: (f)emale
    address: String,
    contact: String, // assuming we will take his number only
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true, // TODO: The email provided is already in use
        validate: [isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [6, 'Minimum password length is 6']
    },
    skills: [String],
    interests: [String],
    borrowedTools: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tools'}],
    ownedTools: [{
        tool: { type: mongoose.Schema.Types.ObjectId, ref: 'Tools' },
        stockNumber: Number,
        stockAvailable: Number
    }],
});



module.exports = mongoose.model("User", userSchema,"Users");