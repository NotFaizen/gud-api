const fetch = require('node-fetch')
const db = require("quick.db")
module.exports = {
  name: "fun/dadjoke",
  run: async(req, res) => {
    const r = await fetch("https://luminabot.xyz/api/json/dadjoke")
    const x = await r.json()
    res.json({ 
      joke: x.joke, 
      message: "Powered by: gud-api" 
    })
    db.add("reqs_fun",1)
    db.add("reqs_dadjoke",1)
  }
}