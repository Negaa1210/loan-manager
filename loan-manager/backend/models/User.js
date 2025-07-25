// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Admin', 'Verifier', 'User'], default: 'User' },
});

module.exports = mongoose.model('User', userSchema);
