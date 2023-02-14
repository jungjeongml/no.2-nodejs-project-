const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const axios = require('axios')


app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true,
}))


app.use(router)


app.use((error, req, res, next) => {
  console.error(error, error.message)
  res.send(`${error.message}`)
})

module.exports = app