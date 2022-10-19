import { runQuery } from '../helpers/helpers.js'
import pkg from '../../../web/utilities/crypto/passwords.js'
const { saltAndHash } = pkg

export async function seedUsers(client){
  const hashedPassword = await saltAndHash('password123')
  await runQuery(client,
    "INSERT INTO accounts (username, password, email, created_on) VALUES ($1, $2, $3, $4)",
    ['shino', saltAndHash('password123'), 'justin@agence.ninja', (new Date()).toISOString()]
  )
  console.log('added data in accounts table')
}