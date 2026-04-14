const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // hidden by default
  role: { type: String, default: 'user' },
  isEmailVerified: { type: Boolean, default: false },
  failedLoginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date },
  refreshTokens: [{
    token: String,
    createdAt: Date
  }]
});

module.exports = mongoose.model('User', userSchema);