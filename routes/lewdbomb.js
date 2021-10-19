const akaneko = require('akaneko');
const keyz = require('../assets/keys.js').keys
const db = require("quick.db")
module.exports = {
  name: "nsfw/lewdbomb",
  run: async(req, res) => {
    let {key} = req.query;
    if(!key || !keyz.includes(key)) {
      return res.json({ error: require(`../assets/utils.json`).KeyError })
    }
    let limit = parseInt(req.query.limit);
    if(isNaN(limit)) return res.json({ error: "Not a number" })
    if(limit > 20) return res.json({ error: "The max limit is 20" })
    const image = await akaneko.lewdBomb(limit)
    res.json({ 
      data: image  
    })
    }
}