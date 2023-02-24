// Dependencies
const express = require('express')
const router = express.Router()

// Import Fexternal functions
const { getCourier, setCourier, deleteCourier, updateCourier } = require('../controllers/courierController')

// Routes
router.route('/').get(getCourier).post(setCourier)
router.route('/:id').delete(deleteCourier).put(updateCourier)

module.exports = router
