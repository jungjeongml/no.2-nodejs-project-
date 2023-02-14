const express = require('express')
const router = express.Router()
const users = require('../src/user/userRoute')
const auth = require('../src/auth/authRoute')

router.use('/users', users)
router.use('/auth', auth)


module.exports = router