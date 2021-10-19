const db = require(`quick.db`)
module.exports = {
  name: "misc/reqs/:ed",
  run: async(req,res) => {
    const {ed} = req.params;
    const {key} = req.query;
    if(key !== process.env.faizen_key || !key) return res.json({ error: "Owner only!" })
    res.json({ reqs: db.get(`reqs_${ed}`) })
  }
}