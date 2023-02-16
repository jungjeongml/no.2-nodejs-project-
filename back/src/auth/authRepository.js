class AuthRepository {
  constructor({ User }){
    this.User = User
  }

  async ctoken({userid, userpw}){
    try{
      console.log('userid', userid)
      console.log('userpw', userpw)
      const users = await this.User.findOne({
        raw: true,
        attributes: {exclude: ['userpw']},
        where: {
          userid,
          userpw,
        }
      })
      console.log('user::', users)
      return users
    } catch(e){
      throw new Error(e)
    }
  }

  async getUser({userid, userpw}){
    try{
      const user = await this.User.findOne({
        raw: true,
        attributes: {exclude: ['userpw']},
        where: {
          userid,
          userpw,
        }
      })
      return user
    } catch(e){
      throw new Error(e)
    }
  }
}

module.exports = AuthRepository