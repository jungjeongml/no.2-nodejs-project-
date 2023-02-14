class AuthService{
  constructor({ authRepository, jwt}){
    this.authRepository = authRepository
    this.jwt = jwt
    this.crypto = jwt.crypto
  }

  async token({userid, userpw}){
    try{
      if(!userid || !userpw) throw 'not content'
      const hash = this.crypto.createHmac('sha256', 'jung').update(userpw).digest('hex')
      const user = this.authRepository.getUser({ userid, userpw:hash})
      if(!user) throw 'not user'

      const token = this.jwt.sign(user)
      return token
    } catch(e) {
      throw new Error(e)
    }
  }
}

module.exports = AuthService