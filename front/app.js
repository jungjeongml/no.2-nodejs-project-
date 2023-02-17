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



app.use(router)

module.exports = app