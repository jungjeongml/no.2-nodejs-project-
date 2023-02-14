class UserService {
  constructor({userRepository, jwt}){
    this.userRepository = userRepository
    this.jwt = jwt
    this.crypto = jwt.crypto
  }
  
  async signUp({ userid, userpw, nickname, tellnumber, email, profileimg}){
    try{
      if(!userid || !userpw || !nickname || !tellnumber) throw 'not content'
      // const { payload } = { userid, userpw }
      // const jwtToken = jwt.sign(payload, jwt.secretKey, jwt.options)
      // console.log(jwtToken)
      const hash = this.crypto.createHmac('sha256', 'jung').update(userpw).digest('hex')
      const user = await this.userRepository.addUser({ userid, userpw:hash, nickname, tellnumber, email, profileimg})
      return user
    } catch(e){
      throw new Error(e)
    }
  }
}

module.exports = UserService