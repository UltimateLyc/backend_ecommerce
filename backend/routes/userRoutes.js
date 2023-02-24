const express = require('express')
const router = express.Router()

const { setUser, loginUser, dataUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', setUser)
router.post('/login', loginUser)
router.post('/data', protect, dataUser)

module.exports = router
