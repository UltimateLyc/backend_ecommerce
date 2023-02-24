const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please entre the name']
  },
  email: {
    type: String,
    required: [true, 'Please entre the email']
  },
  password: {
    type: String,
    required: [true, 'Please entre the password']
  },
  seller: {
    type: Boolean,
    default: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  validateAccount: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
