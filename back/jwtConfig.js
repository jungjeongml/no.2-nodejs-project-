const jwtConfig = {
  secretKey : 'jung',
  options: {
    algorithm: 'HS256',
    expiresIn: '60m',
    issuer : 'issuer'
  }
}

module.exports = jwtConfig