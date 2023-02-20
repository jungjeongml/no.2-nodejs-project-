class AuthController{
  constructor({authService}){
    this.authService = authService
  }

  async joinIn(req, res, next){
    try{
      const {userid, userpw} = req.body
      const token = await this.authService.itoken({userid, userpw})
      console.log(token)
      res.json({token})
    } catch(e){
      next(e)
    }
  }


  async postLogin(req, res, next){
    try{
      console.log(req.body)
      const {userid, userpw} = req.body
      const token = await this.authService.token({ userid, userpw})
      res.json({ token })
    } catch(e){
      next(e)
    }
  }
}

module.exports = AuthController