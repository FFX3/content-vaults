
const { runPlay } = require('../helpers/helpers')

module.exports = async function dropAll(client){
  await runPlay(client,
    `
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    GRANT ALL ON SCHEMA public TO postgres;
    GRANT ALL ON SCHEMA public TO public;
    `
  )
}