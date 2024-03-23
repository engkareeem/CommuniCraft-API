require("dotenv").config()
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authMaxAge = 3 * 24 * 60 * 60; // 3 days in seconds


let blacklist = [];

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: authMaxAge});

}

const addToBlacklist = (token) => {
    blacklist.push(token);
}


const isTokenBlacklisted = (token) => {
    return blacklist.includes(token);
}

module.exports.auth_erorr_handler = (error, req, res, next) => {
    let errors = {};
    
   
    if(error.message == "Email not found"){
        errors['email'] = "The email is not registered";
    }
    if(error.message == "Incorrect password"){
        errors['password'] = "The provided password is incorrect";
    }

    if(error.message == "Token missed") {
        errors['token'] = "Token was not provided in the headers";
    }
    if(error.code === 11000) {
        errors['email'] = 'The email provided is already in use.'
    }

    if(error.message == 'Invalid Token') {
        errors['Authorization'] = 'The provided token is not valid.';
    }
    
    if(error._message && error._message.includes('User validation failed')) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;  
        });
        
    }
    res.status(400).json({errors});
    
}

module.exports.isAuthorized = async(req, res) => {
    res.status(200).json({message: "user is authorized"});
}



module.exports.signup = async (req, res, next) => {
    const { password } = req.body;
    try {
        const user = await User.create(req.body);
        const token = createToken(user._id);
        res.status(201).json({ token});
    }
    catch(err) {
        next(err);
    }
    
}


module.exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({token});
    } catch(err){
        next(err);
    }
}

module.exports.logout = async (req, res) => {
    addToBlacklist(req.token);
    res.status(200).json({message: "User logged out succesfully"});
}
