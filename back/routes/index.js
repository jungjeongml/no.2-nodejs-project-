const express = require('express')
const router = express.Router()
const users = require('../src/user/userRoute')
const boards = require('../src/board/')

router.use('/users', users)
router.use('')

module.exports = router