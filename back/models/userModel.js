module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.model {
    static initialize(){
      return this.init({
        userid:{
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        userpw:{
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        tellnumber:{
          type:Sequelize.STRING(15),
          allowNull: false
        },
        email: {
          type:Sequelize.STRING(30),
          allowNull: true
        },
        profileimg: {
          type:Sequelize.STRING(200),
          allowNull: true
        }
      },
      {
        sequelize,
      })
    } 
  }
  User.initialize()
}

