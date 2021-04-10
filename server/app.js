require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const app = express()

const auth = require('./routes/auth');
const fileRoutes = require('./routes/file-upload-routes');
const passport = require('passport');
const passportConfig = require('./routes/passport');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patients');
const isDoctor = require('./isDoctor');
const isPatient = require('./isPatient');
const bodyParser = require('body-parser');

app.use(cookieParser());
mongoose.connect('mongodb+srv://AayushSamaiyar:${process.env.PASSWORD}@cluster0.awh5s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    useCreateIndex: true,
    useFindAndModify: true}, ()  => {
        console.log('Connected to database');
})

app.use('/user',auth);
app.use('/Doctors',passport.authenticate('jwt',{session:false}), isDoctor,Doctor);
app.use('/patient',passport.authenticate('jwt',{session:false}),isPatient,Patient);

app.get('/', (req,res) => {
    res.status(200).json({message : 'Welcome'})
})

app.get('/login',(req,res)=>{
    res.status(200).json({message:'Welcome to login page'});
})

app.get('/register',(req,res)=>{
    res.status(200).json({message:'Welcome to register page'});
})

app.get('/singlefile', (req,res) => {
    res.status(200).json({message:'welcome to upload'});
})
app.get('/multiplefile', (req,res) => {
    res.status(200).json({message:'welcome to upload'});
})

app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server started at localhost:'+port);
})