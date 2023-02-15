class UserController{
  constructor({userService}){
    this.userService = userService
  }

  async getSignup(req, res, next){
    try{
      const users = await this.userService.getAll({})
      console.log(users)
      // const usersId = users.dataValues
      // console.log(usersId)
      res.json(users)
    } catch(e){
      next(e)
    }
  }

  async postId(req, res, next){
    try{
      const userid = req.body
      const user = await this.userService.signId({userid})
      console.log(user)
      console.log(Boolean(user.length))
      if( user.length ){
        res.send('impossible')
      } else {
        res.send('possible')
      }
    } catch(e){
      next(e)
    }
  }

  async postNk(req, res, next){
    try{
      const nickname = req.body
      const nick = await this.userService.findNk({nickname})
      if(nick.length){
        res.send('impossible')
      } else {
        res.send('possible')
      }
    } catch(e){
      next(e)
    }
  }

  async postSignup(req, res, next){
    try{
      const {userid, userpw, nickname, tellnumber, email, profileimg} = req.body
      const user = await this.userService.signUp({userid, userpw, nickname, tellnumber, email, profileimg})
      res.status(201).json(user)
    } catch(e){
      next(e)
    }
  }
}

module.exports = UserController