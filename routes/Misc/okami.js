const fetch = require('node-fetch')
const db = require("quick.db")
module.exports = {
  name: "misc/okami", //okami = wolf girl
  run: async(req, res) => {
    var joe = await fetch('https://purrbot.site/api/img/sfw/okami/img')
    var candice = await joe.json()
    res.json({ url: candice.link })
    db.add("reqs_misc",1)
    db.add("reqs_okami",1)
  }
}