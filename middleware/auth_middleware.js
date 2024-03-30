require("dotenv").config()
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getCurrentUser = async (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        req.token = token;
        if(token){
        
            const decodedToekn = jwt.verify(token, process.env.JWT_SECRET);
            let user = await User.findById(decodedToekn.id);
            
            if(user) {
                req.user = user;
                next();

            }
        
        }
        next(Error('Token missed'));
        
    }else {
        next(Error('Invalid Token'));
    }
    
}


const checkCurrentUserWithToken = async (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        req.token = token;
        if(token){

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            if(decodedToken.id === req.params.id || await isPrivileged(decodedToken.id)) {
                next();
            } else {
                next(Error('User not privileged'))
            }
        } else {
            next(Error('User is not Authorized'));
        }

    }else {
        next(Error('Invalid Token'));
    }
}
const isPrivileged = async (id) => {
    const user = await User.findById(id).lean();
    return user.isAdmin;
}
const checkPrivilegedUserWithToken = async (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        req.token = token;
        if(token){

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            if(await isPrivileged(decodedToken.id)) {
                next();
            } else {
                next(Error('User not privileged'))
            }
        } else {
            next(Error('User is not Authorized'));
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
                const decodedToekn = jwt.verify(token, process.env.JWT_SECRET);
                if(decodedToekn) next();
        
            }catch(err) {
                next(Error('Invalid Token'));
            }
            
        }else {
            next(Error('Token missed'));
        }
    }else {
        next(Error('Invalid Token'));
    }
    
}

module.exports = {getCurrentUser, checkAuth, checkCurrentUserWithToken, checkPrivilegedUserWithToken, isPrivileged}