const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, insira seu nome'],
  },
  email: {
    type: String,
    required: [true, 'Por favor, insira seu email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Por favor, insira sua senha'],
    minlength: 6,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
