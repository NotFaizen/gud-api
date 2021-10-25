const akaneko = require('akaneko');
const db = require("quick.db")
module.exports = {
  name: "misc/foxgirl",
  run: async(req, res) => {
    var image = await akaneko.foxgirl()
    res.json({ 
      url: image,  
    })
    db.add("reqs_misc",1)
    db.add("reqs_foxgirl",1)
  }
}