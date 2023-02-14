const express = require('express')
const router = express.Router()
const {userController: controller} = require('./userModule')



router.get('/join', (req, res, next) => {

})

router.post('/join', (req, res, next) => {

  controller.postSignup(req, res, next)
})

router.get('/welcome', (req, res, next) => {
  
})

router.get('/profile', (req, res, next) => {
  
})

router.get('/logout', (req, res, next) => {
  
})



module.exports = router