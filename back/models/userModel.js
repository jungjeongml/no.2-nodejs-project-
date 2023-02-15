module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static initialize(){
      return this.init({
        userid:{
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        userpw:{
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
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

    static associate(models){
      this.hasMany(models.Board, {
        foreignKey: 'nickname',
      })
    }
  }
  User.initialize()
}

