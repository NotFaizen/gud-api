const fetch = require('node-fetch')
const mom = require("../assets/momjokes.json")
const db = require("quick.db")
async function yomama() {
  r = await fetch("https://api.yomomma.info/")
  data = await r.json()
  return await data
}
module.exports = {
  name: "fun/joke/:type",
  run: async(req, res) => {
    const {type} = req.params;
    if (type.toLowerCase() == "dad") {
      const r = await fetch("https://luminabot.xyz/api/json/dadjoke")
      const x = await r.json()
      res.json({ joke: x.joke })
    } else if (type.toLowerCase() == "mom") {
      rand_mom = mom[Math.floor(Math.random() * mom.length)]
      res.json({ joke: rand_mom })
    } else if (type.toLowerCase() == "yomama") {
      mama = await yomama()
      res.json({ joke: mama.joke })
    } else {
      res.json({ error: "Syntax error! Valid syntax: https://gud-api.gofaizen.repl.co/fun/joke/< mom | dad | yomama >" })
    }
    db.add("reqs_fun",1)
    db.add("reqs_joke",1)
  }
}