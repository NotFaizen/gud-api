const akaneko = require('akaneko');
//const keyz = require('../assets/keys.js').keys
const db = require("quick.db")
module.exports = {
  name: "test/lewdbomb",
  run: async(req, res) => {
    let {key} = req.query;
    if (key !== process.env.faizen_key) return res.json({ error: "Owner only endpoint!" })
    var {limit} = req.query;
    if(isNaN(limit)) return res.json({ error: "Not a number" })
    const image = await akaneko.lewdBomb(limit)
    res.json({ 
      data: image  
    })
    }
}