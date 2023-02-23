// Dependencies
const express = require('express')
const router = express.Router()

// Import external functions
const { setCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController')

// Routes
router.route('/').post(setCategory).get(getCategories)
router.route('/:id').put(updateCategory).delete(deleteCategory)

module.exports = router
