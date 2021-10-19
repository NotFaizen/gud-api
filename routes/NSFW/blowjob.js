const db = require("quick.db")
const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
module.exports = {
  name: "nsfw/blowjob",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.blowjob()
    res.json({ 
      url: image,  
    })
    db.add("reqs_nsfw",1)
    db.add("reqs_blowjob",1)
  }
}