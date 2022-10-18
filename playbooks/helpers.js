async function runPlay(client, text, values){
  try {
    const res = await client.query(text, values)
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  } catch (err) {
    console.log(err.stack)
    process.exit()
  }
}

module.exports = { runPlay }