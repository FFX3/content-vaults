import { seedUsers } from './seed-users.js'

export default async function runPlay(client, arg){
  const playList = {
    'seed-users': seedUsers
  }
  
  const stagedPlay = playList[arg]
  
  if(stagedPlay)
    await stagedPlay(client)
  else
    console.log(`No play corresponds to ${arg}`)
} 