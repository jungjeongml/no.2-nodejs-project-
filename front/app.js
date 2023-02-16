const express = require('express')
const router = require('./routes')
const nunjucks = require('nunjucks')
const app = express()
const cookieParser = require('cookie-parser')

app.set('view engine', 'html')
nunjucks.configure('views', {express: app})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static('public'))

app.use((req, res, next)=>{
  try{
    const {token} = req.cookies
    const [header, payload, signature] = token.split('.')
    const pl = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'))
    console.log(pl)
    req.user = pl
  } catch(e){

  } finally {
    next()
  }
})

app.use(router)

module.exports = app