import dotenv from 'dotenv' 
import pkg from 'pg'
const { Client } = pkg
dotenv.config()

const client = new Client({
  user: process.env.PGSQL_USER,
  host: process.env.PGSQL_HOST,
  database: process.env.PGSQL_DATABASE,
  password: process.env.PGSQL_PASSWORD,
  port: process.env.PGSQL_PORT,
})

export default client