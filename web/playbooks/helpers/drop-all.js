import { runQuery } from './helpers.js'

export default async function dropAll(client){
  await runQuery(client,
    `
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    GRANT ALL ON SCHEMA public TO postgres;
    GRANT ALL ON SCHEMA public TO public;
    `
  )
}