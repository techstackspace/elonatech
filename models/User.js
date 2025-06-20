const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Creates a unique index on email
  },
  age: Number,
}, {
  timestamps: true,
});

// Optional: Create the index explicitly (not required if `unique` is used)
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);
