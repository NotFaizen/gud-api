const db = require("quick.db")
const axios = require('axios')
module.exports = {
  name: "fun/animequote",
  run: async(req, res) => {
    const Resp = await axios.get("https://animechan.vercel.app/api/random")
    let Resp_json = Resp.data
    res.send(Resp_json)
    db.add("reqs_fun",1)
    db.add("reqs_animequote",1)
  }
}