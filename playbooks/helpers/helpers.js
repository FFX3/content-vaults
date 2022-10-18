async function runPlay(client, text, values = []){
  try {
    const res = await client.query(text, values)
    if(res.rowAsArray)
      console.log(res.rows[0])
  } catch (err) {
    console.log(err.stack)
    process.exit()
  }
}

module.exports = { runPlay }