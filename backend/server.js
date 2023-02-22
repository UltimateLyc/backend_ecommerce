/* Dependencies */
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

// Connection with the port
const port = process.env.PORT

// Create APP
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Conecction APP whit the port
app.listen(port, () => console.log(`Server started on port ${port}`))
