const fetch = require('node-fetch')
const db = require("quick.db")
module.exports = {
  name: "interactions/hug",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/hug")
    const data = await r.json()
    res.json({ 
    image: data.url, 
    message: "Powered by: gud-api"
    })
    db.add("reqs_interactions",1)
    db.add("reqs_hug",1)
  }
}