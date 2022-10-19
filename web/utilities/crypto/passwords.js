import bcrypt from "bcrypt";
const saltRounds = 12

import db from '../db/db.js'
const { conn } = db

export async function saltAndHash(password){
  let result;
  await bcrypt.hash(password, saltRounds, function(err, hash) {
    result = hash
  });
  return result
}

export function validatePassword(email, password){
  hash = conn.query(`SELECT password FROM accounts WHERE email = $1`, [email])
  return validateHash(password, hash)
}

function validateHash(password, hash){
  let result;
  bcrypt.compare(password, hash, function(err, match) {
    result = match
  });
  return result
}

export default { saltAndHash }