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

router.use((req, res, next)=>{
  try{
    const {token} = req.cookies
    const [header, payload, signature] = token.split('.')
    const pl = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'))
    console.log('pl::', pl)
    req.user = pl
  } catch(e){

  } finally {
    next()
  }
})

router.get('/', (req,res) => {
  console.log(req.cookies)

  res.render('index.html')
})

router.post('/', (req, res) => {
  // console.log(req.auth)
  res.redirect('/')
})

router.get('/join', async (req, res) => {

  res.render('user/signup.html')
})

router.post('/join', async (req, res) => {
  const response = await request.post("/users/join",{
    ...req.body
  })
  const aresponse = await request.post('/auth/join/', {...req.body})
  // console.log(aresponse)
  // console.log(aresponse.data.token)
  if(aresponse.status === 200){
    res.setHeader('Set-cookie', `token=${aresponse.data.token}`)
    res.redirect(`/welcome`)
  }
  
  // console.log(response)
  
  // const { userid, nickname, tellnumber, email } = response.data
  // res.render('user/welcome.html',{userid, nickname, tellnumber, email})
  // res.redirect(`/welcome?userid=${userid}&nickname=${nickname}&tellnumber=${tellnumber}&email=${email}`)
  // res.redirect(`/welcome?userid=${userid}`)
})

router.get('/myprofile', async (req, res) => {
  // console.log(req.cookies)
  // const {token} = req.cookies
  // console.log(token)
  // const {userid, nickname, tellnumber, email} = req.query
  console.log('requser::', req.user)
  const {userid, nickname, tellnumber, email} = req.user
  
  // const response = await request.get('/users/welcome', req.query)
  // console.log(response.data)
  // res.render('user/welcome.html', {
  //   userid,
  //   nickname,
  //   tellnumber,
  //   email,
  // })
  res.render('user/welcome.html',{
    userid,
    nickname,
    tellnumber,
    email
  })
})


module.exports = router