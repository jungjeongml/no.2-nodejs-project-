const express = require('express')
const router = require('./routes')
const cors = require('cors')

app.use(router)
app.use(express.json())
app.use(cors())

