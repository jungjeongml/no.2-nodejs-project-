class AuthService{
  constructor({ authRepository, jwt}){
    this.authRepository = authRepository
    this.jwt = jwt
    this.crypto = jwt.crypto
  }

  async itoken({userid, userpw}){
    try{
      const hash = await this.crypto.createHmac('sha256', 'jung').update(userpw).digest('hex')
      // const user = await this.authRepository.ctoken({userid, userpw:hash})
      // console.log(user)
      const token = this.jwt.sign({userid, userpw:hash})
      console.log(token)
      return token
    } catch(e){
      throw new Error(e)
    }
  }

  async token({userid, userpw}){
    try{
      if(!userid || !userpw) throw 'not content'
      const hash = await this.crypto.createHmac('sha256', 'jung').update(userpw).digest('hex')
      const user = await this.authRepository.getUser({ userid, userpw:hash})
      if(!user) throw 'not user'

      const token = this.jwt.sign(user)
      return token
    } catch(e) {
      throw new Error(e)
    }
  }
}

module.exports = AuthService