const client = require("nekos.life")
const neko = new client()
const keysList = require("../assets/keys.js").keys
const db = require('quick.db')
module.exports = {
  name: "nsfw/futanari",
  run: async(req,res) => {
    var {key} = req.query;
    if(!keysList.includes(key) || !key) {
      return res.json({ error: require("../assets/utils.json").KeyError })
    }
    var futa = await neko.nsfw.futanari()
    res.json({ url: futa.url })
    db.add("reqs_nsfw", 1)
    db.add("reqs_futanari", 1)
  }
}