const app = require('./app')
const config = require('./config')
const PORT = config.port

app.listen(PORT, async () => {
  await sequelize.sync({ force: true})
  console.log(`back server start`)
})