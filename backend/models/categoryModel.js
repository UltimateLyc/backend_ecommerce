// Dependecies
const mongoose = require('mongoose')

// Schema
const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, 'Please entre the category']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Category', categorySchema)
