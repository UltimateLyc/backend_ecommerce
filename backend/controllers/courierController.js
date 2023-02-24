// Dependencies
const asyncHandler = require('express-async-handler')

// Import external models
const courier = require('../models/courierModel')

// Endpoints function
// Function POST
const setCourier = asyncHandler(async (req, res) => {
  const { courierName } = req.body

  if (!courierName) {
    res.status(400)
    throw new Error('Please entre the courier')
  }

  const newCourier = await courier.create({
    courierName
  })

  res.status(201).json(newCourier)
})

// Function GET
const getCourier = asyncHandler(async (req, res) => {
  const categories = await courier.find()
  res.status(200).json(categories)
})

// Function PUT
const updateCourier = asyncHandler(async (req, res) => {
  let updateCourier = await courier.findById(req.params.id)

  if (!updateCourier) {
    res.status(400)
    throw new Error('Courier not found')
  }

  updateCourier = await courier.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updateCourier)
})

// Function DELETE
const deleteCourier = asyncHandler(async (req, res) => {
  const deleteCourier = await courier.findById(req.params.id)

  if (!deleteCourier) {
    res.status(400)
    throw new Error('Courier not found')
  }

  await deleteCourier.remove()

  res.status(200).json(deleteCourier)
})

module.exports = {
  setCourier,
  getCourier,
  updateCourier,
  deleteCourier
}
