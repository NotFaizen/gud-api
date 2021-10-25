const akaneko = require('akaneko');
const db = require("quick.db")
module.exports = {
  name: "misc/neko",
  run: async(req, res) => {
    const image = await akaneko.neko()
    res.json({ 
      url: image,
    })
    db.add("reqs_misc",1)
    db.add("reqs_neko",1)
  }
}