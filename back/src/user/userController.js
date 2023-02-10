class UserController{
  constructor({userService}){
    this.userService = userService
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