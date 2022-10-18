const client = require('./helpers/pg-client')

async function run(){
  await client.connect()

  await require('./helpers/drop-all')(client)
  await require('./migrations/migrate')(client)

  const playbook = require('./plays/'+process.argv[2])

  await playbook(client)

  console.log('%%% --- SEEDING COMPLETE --- %%%')
  await client.end()
}

run()