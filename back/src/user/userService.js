class UserService {
  constructor({userRepository, jwt}){
    this.userRepository = userRepository
    this.jwt = jwt
    this.crypto = jwt.crypto
  }

  async getAll(){
    try{
      const users = this.userRepository.getUsers()
      return users
    } catch(e){
      throw new Error(e)
    }
  }

  async signId({userid}){
    try{
      const obj = userid
      const [id] = Object.keys(obj)
      const usersId = await this.userRepository.getId()
      const check = usersId.filter(v => v.userid === id)
      return check
    } catch(e){
      throw new Error(e)
    }
  }

  async findNk({nickname}){
    try{
      const obj = nickname
      const [nick] = Object.keys(obj)
      const userNick = await this.userRepository.getNk()
      const check = userNick.filter(v => v.nickname === nick)
      return check
    } catch(e){
      throw new Error(e)
    }
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