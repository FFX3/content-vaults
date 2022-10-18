const client = require('./pg-client')

async function run(){
  await client.connect()
  const playbook = require('./'+process.argv[2])

  await playbook(client)

  console.log('%%% --- SEEDING COMPLETE --- %%%')
  await client.end()
}

run()