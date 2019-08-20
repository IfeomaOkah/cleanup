const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Event = require("../models/Event");
var createError = require('http-errors');

router.post("/signup", (req,res,next)=> {   
    User.create(req.body)
        .then((user)=> {
            let {username, email, firstname, lastname, dob, password} = user;
            let sessionData = {username, email, firstname, dob, lastname, password};
            req.session.user = sessionData;
            res.status(200).json(sessionData);
        })
        .catch((error)=> {
            if(error.name === "ValidationError") next(createError(400, error.message))
            else next(createError(500));
        })
})

router.post("/login", (req,res,next)=> {
    User.findOne({$or: [{username: req.body.username}, {email: req.body.username}]})
        .then((user)=> {
            if(!user) next(createError(401), "Invalid credentials.");
            else {
            return user.comparePasswords(req.body.password)
                .then((match)=> {
                    if(match) {
                        let {username, email, firstname, lastname, dob, id} = user;
                        let sessionData = {username, email, firstname,dob, lastname, id};
                        req.session.user = sessionData;
                        res.status(200).json(sessionData);
                    } else {
                        next(createError(401, "Invalid credentials."));
                    }
                })
            }
        })
        .catch((error)=> {
            next(createError(500));
        })
})

 router.get("/logout", (req,res, next)=> {
     req.session.destroy();
     res.status(205).end();
 })

router.get('/cleanups', (req, res, next) => {
    res.json(cleanups);
});

module.exports = router;










// const express    = require('express');
// const authRoutes = express.Router();
// const passport   = require('passport');
// const bcrypt     = require('bcryptjs');
// const User       = require('../models/User');


// authRoutes.post('/signup', (req, res, next) => {
//     const {username, firstName, lastName, dob, email, password} = req.body
  
//     User.findOne({ username }, (err, foundUser) => {
       
//         if(err){
//             res.status(500).json({message: "username not found"});
//             return;
//         }

//         if (foundUser) {
//             res.status(400).json({ message: 'username unavailable' });
//             return;
//         }
  
//         const salt     = bcrypt.genSaltSync(10);
//         const hashPass = bcrypt.hashSync(password, salt);
        
//         const aNewUser = new User({
//             username: username,
//             firstName: firstName,
//             lastName: lastName,
//             dob: dob,
//             email: email,
//             password: hashPass
//         });
  
//         aNewUser.save((err, user) => {
//             if(err && err.name == "ValidationError") {
//                 res.status(400).json({message: err.message})
//                 return
//             } else if(err) {
//                 res.status(500).json({ message: 'login failed' });
//                 return
//             }
//             req.session.user = user; 
//             // Send the user's information to the frontend
//             // We can use also: res.status(200).json(req.user);
//             res.status(200).json(user);
//         })
//     })
// });

// authRoutes.post('/login', (req, res, next) => {
//     passport.authenticate('local', (err, theUser, failureDetails) => {
//         if (err) {
//             res.status(500).json({ message: 'Something went wrong authenticating user' });
//             return;
//         }
    
//         if (!theUser) {
//             // "failureDetails" contains the error messages
//             // from our logic in "LocalStrategy" { message: '...' }.
//             res.status(401).json(failureDetails);
//             return;
//         }

//         // save user in session
//         req.login(theUser, (err) => {
//             if (err) {
//                 res.status(500).json({ message: 'Session save went bad.' });
//                 return;
//             }
//             // We are now logged in (that's why we can also send req.user)
//             res.status(200).json(theUser);
//         });
//     })(req, res, next);
// });

// authRoutes.post('/logout', (req, res, next) => {
//     // req.logout() is defined by passport
//     req.logout();
//     res.status(200).json({ message: 'Log out success!' });
// });


// authRoutes.get('/loggedin', (req, res, next) => {
//     // req.isAuthenticated() is defined by passport
//     if (req.isAuthenticated()) {
//         res.status(200).json(req.user);
//         return;
//     }
//     res.status(403).json({ message: 'Unauthorized' });
// });



// module.exports = authRoutes;
