const mongoose   = require('mongoose'), timestamps = require('mongoose-timestamp');

const DoctorSchema = new mongoose.Schema({
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
        type: String,
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
        timestamps : true
    },
    CloseTime: {
        timestamps: true
    },
    role:{
      type : String,
      enum : ['Doctor'],
      required:true
  }
  });

models.export = mongoose.model('doctor',DoctorSchema)