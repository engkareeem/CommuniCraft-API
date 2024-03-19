require("dotenv").config()
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const getCurrentUser = async (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        req.token = token;
        if(token){
        
            const decodedToekn = await jwt.verify(token, process.env.JWT_SECRET);
            let user = await User.findById(decodedToken.id);
            
            if(user) {
                req.user = user;
                next();

            }
        
        }
    }else {
        next(Error('Invalid Token'));
    }
    
}

const checkAuth = async (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        req.token = token;
        
        if(token){
            try {
                const decodedToekn = await jwt.verify(token, process.env.JWT_SECRET);
                if(decodedToekn) next();
        
            }catch(err) {
                next(Error('Invalid Token'));
            }
            
        }
    }else {
        next(Error('Invalid Token'));
    }
    
}

module.exports = {getCurrentUser, checkAuth}