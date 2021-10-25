const fetch = require('node-fetch')
const db = require("quick.db")
module.exports = {
  name: "fun/pickuplines",
  run: async(req, res) => {
    r = await fetch("https://not-an-api.gofaizen.repl.co/pickuplines")
    line = await r.json()
    res.json({ 
      response: line.response, 
      message: "Powered by gud-api" 
    })
    db.add("reqs_fun",1)
    db.add("reqs_pickuplines",1)
  }
}