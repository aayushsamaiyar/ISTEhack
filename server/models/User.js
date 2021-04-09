const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

UserSchema.pre('save',function(next){
  if (!this.isModified('password'))
    return next();
  bcrypt.hash(this.password,10,(err,passwordHash)=> {
    if (err){
      return next(err);
    }
    this.password = passwordHash;
    next();
  });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;