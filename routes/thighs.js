const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
const db = require("quick.db")
module.exports = {
  name: "nsfw/thighs",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.thighs()
    res.json({ 
      url: image,  
    })
    db.add("reqs_nsfw",1)
    db.add("reqs_thighs",1)
  }
}