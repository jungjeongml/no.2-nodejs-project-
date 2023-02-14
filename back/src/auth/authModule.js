
const {sequelize: {models:{ User }}} = require('../../models')

const AuthController = require('./authController')
const AuthService = require('./authService')
const AuthRepository = require('./authRepository')
const JWT = require('../../lib/jwt')
const crypto = require('crypto')
const jwt = new JWT({crypto})

const authRepository = new AuthRepository({ User })
const authService = new AuthService({ authRepository, jwt })
const authController = new AuthController({ authService })



module.exports = {authController}