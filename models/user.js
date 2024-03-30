const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    age: Number,
    gender: Boolean, // true: male, (f)alse: (f)emale
    address: String,
    contact: String, // assuming we will take his number only
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true, // TODO: The email provided is already in use
        validate: [isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Minimum password length is 6']
    },
    isAdmin: {type: Boolean, default: false},
    skills: [String],
    interests: [String],
    borrowedTools: [
        {
            tool:{
                type: mongoose.Schema.Types.ObjectId, ref: 'Tools',
                required: [true, 'Please provide UserId']
            },
            from:{
                type: mongoose.Schema.Types.ObjectId, ref: 'Users',
                required: [true, 'Please provide ToolId'],
            }
        }
    ],
    ownedTools: [{
        tool: { type: mongoose.Schema.Types.ObjectId, ref: 'Tools' },
        stockNumber: Number,
        stockAvailable: Number,
        availableToBorrow: Boolean
    }],
});

userSchema.pre('save', async function(next){
    if(this.password) this.password = await bcrypt.hash(this.password, 10);
    next();
});


userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error("Incorrect password");
    }
    
    throw Error("Email not found");
    
}


module.exports = mongoose.model("User", userSchema,"Users");