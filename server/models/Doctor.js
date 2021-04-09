const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      max = 10,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
        type: String,
        maxlength = 20,
        required: true
      },
    speciality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
        rquired: true
    },
    OpenTime:{
        timestamps:true,
        required: true 
    },
    CloseTime: {
        timestamps:true,
        required: true 
    }
  });

models.export = mongoose.model('doctor',DoctorSchema)