// Dependencies
const mongoose = require('mongoose')

// Schema
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please entre name of product']
  },
  description: {
    type: String,
    required: [true, 'Please entre the description']
  },
  price: {
    type: Number,
    required: [true, 'Please entre the price']
  },
  brand: {
    type: String,
    required: [true, 'Please entre brand of product']
  },
  model: {
    type: String,
    required: [true, 'Please entre brand of product']
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }],
  sku: {
    type: Number,
    required: [true, 'Please entre sku of product']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
