const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cors())

app.use(router)

app.use((error, req, res, next) => {
  console.error(error, error.message)
  res.send(`${error.message}`)
})

module.exports = app