
class UserRepository {
  constructor ({User}){
    this.User = User
  }

  async getUsers(){
    try{
      const users = await this.User.findAll({
        attributes: ['userid']
      })
      return users
    } catch(e){
      throw new Error(e)
    }
  }

  async getId(){
    try{
      const users = await this.User.findAll({
        attributes: ['userid']
      })
      return users
    } catch(e){
      throw new Error(e)
    }
  }

  async getNk(){
    try{
      const nicks = await this.User.findAll({
        attributes: ['nickname']
      })
      return nicks
    } catch(e){
      throw new Error(e)
    }
  }

  async getInfo(){
    try{
      const info = await this.User.findAll({
        attributes: ['userid', 'nickname']
      })
      return info
    } catch(e){
      throw new Error(e)
    }
  }

  async addUser(payload){
    try{
      const user = await this.User.create(payload, {raw: true})
      return user      
    } catch(e){
      throw new Error(e)
    }
  }
}

module.exports = UserRepository