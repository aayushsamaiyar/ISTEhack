const mongoose = require('express');

const PatientSchema = new mongoose.Schema({
    uid:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: 'true' 
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
    }
});

models.export = mongoose.model('Patients',PatientSchema);
