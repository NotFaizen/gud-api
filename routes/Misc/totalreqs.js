const db = require(`quick.db`)
module.exports = {
  name: "misc/requests",
  run: async(req,res) => {
    const {key} = req.query;
    if(key !== process.env.faizen_key || !key) return res.json({ error: "Owner only!" })
    res.json({ reqs: db.get(`reqs_total`) })
  }
}