const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const middleware = {
    isAuth: async (req, res, next) => {
        if(req.cookies.authToken) {
            if(!req.session.user) {
                console.log('Signin user in automatically..');
                const decoded = jwt.verify(req.cookies.authToken, process.env.JWT_SECRET);
                const user = User.findById(decoded.id);
                req.session.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
                next();
            }
        }
        next();
    },

    alreadyLoggedIn: (req, res, next) => {
        if(req.session.user) return res.json({
            message: 'Already logged in!'
        })
        next();
    },

    mustBeLoggedIn: (req, res, next) => {
        if(!req.session.user) return res.json({
            message: 'Must be logged in!'
        })
        next();
    }
}

module.exports =  middleware;