// Dependencies
const express = require('express')
const router = express.Router()

// Import external functions
const { setCategory, getCategories } = require('../controllers/categoryController')

// Routes
router.route('/').post(setCategory).get(getCategories)

module.exports = router
