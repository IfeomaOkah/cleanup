const express = require('express');
const router  = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');

const mongoose = require("mongoose");
const createError = require('http-errors')

router.get('/profile', (req, res, next)=>{
  Event.create({
    element: req.body.element,
    img_url: req.body.img_url,
    headline: req.body.headline,
    date: req.body.date,
    description: req.body.description,
    location: req.body.location, 
    cleaner: req.body.cleaner    
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

router.post("/create_event", (req,res,next)=> {
     
  let newEvent = req.body;
  newEvent.user = mongoose.Types.ObjectId(req.session.user._id);

  Event.create(newEvent)
      .then((event)=> {
          return User.findByIdAndUpdate(req.session.user._id, {$push: {events: event._id}})
      })
      .then((user)=> {
        res.status(200).json({message: "event created"});
      })
      .catch((error)=> {
          console.log(error)
          if(error.name === "ValidationError") next(createError(400, error.message))
          else next(createError(500));
      })
})

module.exports = router;