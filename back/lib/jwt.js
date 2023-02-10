const JWT = require('jsonwebtoken')

const createToken = JWT.sign(payload, secretKey, options)
const verifyToken = JWT.verify(token, secretKey)