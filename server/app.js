require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express()
 
const auth = require('./routes/auth');
const passport = require('passport');
const passportConfig = require('./routes/passport');
// const Doctor = require('./models/Doctor');
// const Patient = require('./models/patient');
const isDoctor = require('./isDoctor');
const isPatient = require('./isPatient');

mongoose.connect('mongodb+srv://AayushSamaiyar:${process.env.PASSWORD}@cluster0.awh5s.mongodb.net/tes',{
    useNewUrlParser:true, 
    useUnifiedTopology:true}, ()  => {
        console.log('Connected to database');
})

app.use('/user',auth);
// app.use('/Doctors',passport.authenticate('jwt',{session:false}), isDoctor,Doctor);
// app.use('/patient',passport.authenticate('jwt',{session:false}),isPatient,Patient);

app.get('/', (req,res) => {
    res.status(200).json({message : 'Welcome'})
})

app.get('/login',(req,res)=>{
    res.status(200).json({message:'Welcome to login page'});
})

app.get('/register',(req,res)=>{
    res.status(200).json({message:'Welcome to register page'});
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server started at localhost:'+port);
})