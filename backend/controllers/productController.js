// Dependencies
const asyncHandler = require('express-async-handler')

const producto = require('../models/productModel')

// Function POST
const setProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    brand,
    model,
    category,
    sku
  } = req.body

  if (!name || !description || !price || !brand || !model || !category || !sku) {
    res.status(400)
    throw new Error('Please entre all the information')
  }

  const existSku = await producto.findOne({ sku })

  if (existSku) {
    res.status(400)
    throw new Error('The SKU exist in the data base')
  }
})

module.exports = {
  setProduct
}
