const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: String,
  loanAmount: String,
  loanTenure: String,
  employmentStatus: String,
  reason: String,
  employmentAddress1: String,
  employmentAddress2: String,
  role: { type: String, enum: ['Admin', 'Verifier', 'User'], default: 'User' },
});

module.exports = mongoose.model('Application', applicationSchema);
