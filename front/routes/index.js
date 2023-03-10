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
    req.user = pl
  } catch(e){

  } finally {
    next()
  }
})

router.get('/', async (req, res, next) => {
  // try{
  // const token = req.cookies.token
  // if(token !== undefined){
  //   const response = await request.get('/users/login', {
  //     headers: {
  //       Authorization : `Bearer ${token}`
  //     }
  //   })
  //   console.log(response)
  //   res.render('index.html', response.data)
  // }
  // res.render('index.html')
  // } catch(e){
  //   throw new Error(e)
  // }
  console.log(req.user)
  if(req.user === undefined) return res.render('index.html')
  const { nickname, profileimg } = req.user
  console.log(profileimg)
  const filepath = `http://localhost:3000/profile/${profileimg}`
  res.render('index.html', {
    nickname,
    filepath,
  })
})

router.post('/', async (req, res, next) => {
  try{
  const response = await request.post('/auth/', {
    ...req.body
  })
  if(response.status === 200){
    // console.log(response.data)
    if(response.data !== 'not user')
    res.setHeader('Set-cookie', `token=${response.data.token}`)
    res.redirect(`/`)
  } else {
    res.redirect(`/`)
  }
  } catch(e){
    throw new Error(e)
  }
})

router.get('/join', async (req, res) => {

  res.render('user/signup.html')
})

router.post('/join', async (req, res, next) => {
  try{
  const response = await request.post("/users/join",{
    ...req.body
  })
  const aresponse = await request.post('/auth/join/', {...req.body})
  // console.log(aresponse)
  // console.log(aresponse.data.token)
  if(aresponse.status === 200){
    res.setHeader('Set-cookie', `token=${aresponse.data.token}`)
    res.redirect(`/myprofile`)
  }
  } catch(e){
    throw new Error(e)
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
  const {userid, nickname, tellnumber, email, profileimg} = req.user
  const filepath = `http://localhost:3000/profile/${profileimg}`
  
  // const response = await request.get('/users/welcome', req.query)
  // console.log(response.data)
  // res.render('user/welcome.html', {
  //   userid,
  //   nickname,
  //   tellnumber,
  //   email,
  // })
  // console.log(req.query)
  // const {filepath} = req.query
  res.render('user/myprofile.html',{
    userid,
    nickname,
    tellnumber,
    email,
    filepath
  })
})


module.exports = router