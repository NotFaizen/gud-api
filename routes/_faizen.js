const db = require("quick.db")
const gofaizen = require(`../assets/faizenimages.json`)
module.exports = {
  name: "misc/faizen",
  run: async(req, res) => {
    const rand_faizen = gofaizen[Math.floor(Math.random() * gofaizen.length)]
    res.json({ url: rand_faizen })
    db.add("reqs_misc",1)
    db.add("reqs_faizen",1)
  }
}