const db = require("quick.db")
module.exports = {
  name: "misc/is-url",
  run: async(req, res) => {
    var url = req.query.url;
    if(!url) return res.json({ 
    status_code: "400", 
    status_text: "NOT OK",
    error: "No URL provided" 
    })
    res.json({ 
      status_code: "200", 
      status_text: "OK", 
      is_url: require('is-url')(url) 
    })
    db.add("reqs_misc",1)
    db.add("reqs_is-url",1)
  }
}