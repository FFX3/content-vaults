const { runPlay } = require('../helpers/helpers')

module.exports = async function dropAll(client){
  await runPlay(client,
    `CREATE TABLE IF NOT EXISTS accounts (
      user_id serial PRIMARY KEY,
      username VARCHAR ( 50 ) UNIQUE NOT NULL,
      password VARCHAR ( 50 ) NOT NULL,
      email VARCHAR ( 255 ) UNIQUE NOT NULL,
      created_on TIMESTAMP NOT NULL,
      last_login TIMESTAMP 
    );`
  )
}