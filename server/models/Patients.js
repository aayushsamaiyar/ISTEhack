const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    fanme: {
        type: String,
        required: true
    },
    lmane: {
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    role:{
        type : String,
        enum : ['Patient'],
        required:true
    }
});

module.exports = mongoose.model('Patients',PatientSchema);
