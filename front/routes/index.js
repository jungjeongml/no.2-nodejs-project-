const express = require('express')
const router = express.Router()
const axios = require('axios')
const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  withCredentials: true,
})

// router.use((req, res, next) => {
//   try{
    
//   } catch(e){

//   }
// })

router.get('/', (req,res) => {
  // console.log(req.cookies)
  res.render('index.html')
})

router.post('/', (req, res) => {
  res.redirect('/')
})

router.get('/join', (req, res) => {
  res.render('user/signup.html')
})

router.post('/join', async (req, res) => {
  const response = await request.post("/users/join",{
    ...req.body
  })
  // console.log(response.data)
  const { userid } = response.data
  // res.redirect(`/welcome?userid=${userid}&nickname=${nickname}&tellnumber=${tellnumber}&email${email}`)
  res.redirect(`/welcome?userid=${userid}`)
})

router.get('/welcome', async (req, res) => {
  const response = await request.get('/users/welcome', {
    ...req.body
  })
  console.log(response)
  res.render('user/welcome.html', {
    userid,
    nickname,
    tellnumber,
    email,
  })
})

router.post('/welcome', (req, res) => {
  res.redirect('/welcome.html')
})


module.exports = router