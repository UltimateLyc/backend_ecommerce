/* Dependencies */
const express = require('express')
const dotenv = require('dotenv').config() // eslint-disable-line no-unused-vars
const colors = require('colors') // eslint-disable-line no-unused-vars

/* External Functions */
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')

// Connection with the port
const port = process.env.PORT

// Connection with Mongo Atlas
connectDB()

// Create APP
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Use middleware
app.use(errorHandler)

// Endpoints
app.use('/api/category', require('./routes/categoryRoutes'))
app.use('/api/courier', require('./routes/courierRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

// Conecction APP whit the port
app.listen(port, () => console.log(`Server started on port ${port}`))
