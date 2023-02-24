// Dependencies
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// External functions
const user = require('../models/userModel')

// Generete TOKEN
const genereteToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

// Function POST
const setUser = asyncHandler(async (req, res) => {
  const { name, email, password, seller, admin, validateAccount } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please entre all the data')
  }

  const existEmail = await user.findOne({ email })

  if (existEmail) {
    res.status(400)
    throw new Error('Email already exist')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  const newUser = await user.create({
    name,
    email,
    password: hashPassword,
    seller,
    admin,
    validateAccount
  })

  if (newUser) {
    res.status(200).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email
    })
  } else {
    res.status(400)
    throw new Error('We cant create your profile')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const User = await user.findOne({ email })
  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User.id,
      name: User.name,
      email: User.email,
      token: genereteToken(User._id)
    })
  } else {
    res.status(400)
    throw new Error('User or Password are incorret')
  }

  res.json({
    message: 'Login Usuario'
  })
})

const dataUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = req.user

  res.status(200).json({
    id: _id,
    name,
    email

  })
})

module.exports = {
  setUser,
  loginUser,
  dataUser
}
