// Dependencies
const mongoose = require('mongoose')

// Schemas
const courierSchema = mongoose.Schema({
  courierName: {
    type: String,
    required: [true, ' Please enthre the courier']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Courier', courierSchema)
