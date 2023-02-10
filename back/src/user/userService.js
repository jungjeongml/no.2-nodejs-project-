class UserService {
  constructor({userRepository}){
    this.userRepository = userRepository
  }

  async signUp({ userid, userpw, nickname, tellnumber, email, profileimg}){
    try{
      if(!userid || !userpw || !nickname || !tellnumber) throw 'not content'
      const user = await this.userRepository.addUser({ userid, userpw, nickname, tellnumber, email, profileimg})
      return user
    } catch(e){
      throw new Error(e)
    }
  }
}

module.exports = UserService