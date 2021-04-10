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
        type: Date,
        default: Date.now
    },
    CloseTime: {
      type: Date,
      default: Date.now
    },
    role:{
      type : String,
      enum : ['Doctor'],
      required:true
  }
  });

module.exports = mongoose.model('doctor',DoctorSchema) 