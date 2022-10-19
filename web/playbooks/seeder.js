import client from './helpers/pg-client.js'
import migrate from './migrations/migrate.js'
import dropAll from './helpers/drop-all.js'
import runPlay from './plays/runPlay.js'

async function run(){
  await client.connect()

  await dropAll(client)
  await migrate(client)

  await runPlay(client, process.argv[2])

  console.log('%%% --- SEEDING COMPLETE --- %%%')
  await client.end()
}

run()