const express = require('express')
const router = express.Router()
const {userController: controller} = require('./userModule')



router.get('/join', (req, res, next) => {
  controller.getSignup(req, res, next)
})

router.post('/join', (req, res, next) => {
  controller.postSignup(req, res, next)
})

router.post('/joinId', (req, res, next) => {
  controller.postId(req, res, next)
})

router.post('/joinNk', (req, res, next) => {
  controller.postNk(req, res, next)
})

router.post('/joinInfo', (req, res, next) => {
  controller.postInfo(req, res, next)
})


router.get('/welcome', (req, res, next) => {
  controller.getWelcome(req, res, next)
})

router.get('/profile', (req, res, next) => {
  
})

router.get('/logout', (req, res, next) => {
  
})



module.exports = router