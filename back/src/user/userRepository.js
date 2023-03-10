
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

  async welUser({userid}){
    try{
      const user = await this.User.findAll({
        where: {
          userid:userid,
        }
      })
      return user
    } catch(e){
      throw new Error(e)
    }
  }

  async updateUser({filename, id}){
    try{
      console.log({filename, id})
      const user = await this.User.update({
        profileimg: filename,
      },{
        where: { userid: id }
      })
      console.log(user)
      return user
    } catch(e){
      throw new Error(e)
    }
  }

  async getUser(userid){
    try{
      const user = this.User.findOne({
        raw: true,
        where:{
          userid
        }
      })
      return user
    } catch(e){
      throw new Error(e)
    }
  }
}

module.exports = UserRepository