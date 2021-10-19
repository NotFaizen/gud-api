const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
const db = require("quick.db")
module.exports = {
  name: "nsfw/yuri",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.yuri()
    res.json({ 
      url: image,  
    })
    db.add("reqs_yuri", 1)
    db.add("reqs_nsfw", 1)
  }
}