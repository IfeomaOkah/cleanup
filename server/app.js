require('dotenv').config()
const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const createError = require('http-errors')
const authRoutes = require('./routes/auth-routes');

mongoose
  .connect('mongodb://localhost/cleanup', {
    userNewUrlParser : true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`)
  })
  .catch(err => {
    console.log('Error connecting to mongo', err);
  })

  function protect(req,res,next){
    if(!req.session.user) {
        next(createError(403));
    } else {
        next();
    }
}


app.use(session({
  secret:"the secret garden",
  resave: true,
  saveUninitialized: true
}));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

function protect(req,res,next) {
  if(req.session.user) next()
  else next(createError(401))
}
app.use('/', require('./routes/index'));

app.use('/api', (req,res,next)=> {debugger;next()},authRoutes);

app.use('/api', require('./routes/user-routes'));
app.use('/api',protect, require('./routes/event-routes'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server listening on port ${process.env.SERVER_PORT}`)
})
module.exports = app; 
