// Dependencies
const express = require('express')
const router = express.Router()

// External Function
const { setProduct } = require('../controllers/productController')
// Middleware
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setProduct)

module.exports = router
