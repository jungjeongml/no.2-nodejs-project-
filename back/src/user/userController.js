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

  async postInfo(req, res, next){
    try{
      console.log(req.body)
      const { userid, nickname } = req.body
      const {checkId, checkNk} = await this.userService.signInfo({ userid, nickname }) 
      console.log({checkId, checkNk})
      if(checkId.length || checkNk.length){
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

  async getWelcome(req, res, next){
    try{
      const {userid} = req.body
      const user = await this.userService.getWel({userid})
      res.json(user)
    } catch(e){
      next(e)
  } 
  }

  async postProfile(req, res, next){
    try{
      const {filename} = req.file
      const filePath = `http://localhost:3000/profile/${filename}`
      const {userid} = req.body
      const id = userid.split("`")[1]
      console.log('id::',id)
      const profile = await this.userService.postImg({filename, id})
      console.log('profile::', profile)
      res.json({profile, filePath})
    } catch(e){
      next(e)
    }
  }

  async login(req, res, next){
    try{
      if(! req.headers.authorization){
        throw new Error('Authorization is not existed')
      }
      const [type, token] = req.headers.authorization.split(' ')
      if(type.toLowerCase() !== 'bearer') throw new Error('Authorization Type Error')
      const user = await this.userService.check(token)
      res.json(user)
    } catch(e){
      next(e)
    }
  }
}
module.exports = UserController