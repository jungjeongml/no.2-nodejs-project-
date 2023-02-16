const express = require('express')
const router = express.Router()
const {authController: controller} = require('./authModule')


router.post('/', (req, res, next) => {
  controller.postLogin(req, res, next)
})

router.post('/join', (req, res, next) => {
  controller.joinIn(req, res, next)
})

module.exports = router
