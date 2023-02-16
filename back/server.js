const app = require('./app')
const config = require('./config')
const PORT = config.port
const { sequelize } = require('./models')

app.listen(PORT, async () => {
  await sequelize.sync({ force: false})
  console.log(`back server start`)
})