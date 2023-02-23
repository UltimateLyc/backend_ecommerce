// Dependencies
const asyncHandler = require('express-async-handler')

// Import external models
const category = require('../models/categoryModel')

// Endpoints function
// Function POST
const setCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body

  if (!categoryName) {
    res.status(400)
    throw new Error('Please entre the category')
  }

  const newCategory = await category.create({
    categoryName
  })

  res.status(201).json(newCategory)
})

// Function GET
const getCategories = asyncHandler(async (req, res) => {
  const categories = await category.find()
  res.status(200).json(categories)
})

module.exports = {
  setCategory,
  getCategories
}
