// Dependencies
const asyncHandler = require('express-async-handler')

const product = require('../models/productModel')

// Function POST
const setProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    brand,
    model,
    category,
    sku,
    quantity
  } = req.body

  if (req.user.seller || req.user.admin) {
    console.log('entre')
    if (!name || !description || !price || !brand || !model || !category || !sku) {
      res.status(400)
      throw new Error('Please entre all the information')
    }

    const existSku = await product.findOne({ sku })

    if (existSku) {
      res.status(400)
      throw new Error('The SKU exist in the data base')
    }

    const createProduct = await product.create({
      name,
      description,
      price,
      brand,
      model,
      category,
      quantity,
      sku,
      sellerId: req.user.id
    })

    res.status(200).json(createProduct)
  } else {
    res.status(400)
    throw new Error('Unauthorized access')
  }
})

module.exports = {
  setProduct
}
