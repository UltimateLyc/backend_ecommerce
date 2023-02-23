// Dependencies
const express = require('express')
const router = express.Router()

// Import external functions
const { setCategory } = require('../controllers/categoryController')

// Routes
router.route('/').post(setCategory)

module.exports = router
