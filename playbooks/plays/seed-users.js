const { runPlay } = require('../helpers/helpers')

module.exports = async function seedUsers(client){
  await runPlay(client,
    "INSERT INTO accounts (username, password, email, created_on) VALUES ($1, $2, $3, $4)",
    ['shino', '1234', 'justin@agence.ninja', (new Date()).toISOString()]
  )
}