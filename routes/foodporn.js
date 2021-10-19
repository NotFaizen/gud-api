const {getfromreddit} = require("../assets/utils.js")
module.exports = {
  name: "fun/foodporn",
  run: async(req,res) => {
    const self = await getfromreddit("foodporn")
    const {simplify} = req.query;
    if (simplify === "true") {
      res.json({ url: self.url })
    } else if (simplify === "false") {
      res.json({ 
      title: self.title,
      image: self.url,
      url: `https://${self.permalink}`,
      subreddit: `r/${self.subreddit}`,
      author: self.author,
      upvotes: String(self.ups),
      downvotes: String(self.downs),
      comments: String(self.num_comments),
      upvote_ratio: String(self.upvote_ratio),
      spoiler: self.spoiler
     })
    } else {
    res.json({ 
      title: self.title,
      image: self.url,
      url: `https://reddit.com${self.permalink}`,
      subreddit: `r/${self.subreddit}`,
      author: self.author,
      upvotes: String(self.ups),
      downvotes: String(self.downs),
      comments: String(self.num_comments),
      upvote_ratio: String(self.upvote_ratio),
      spoiler: self.spoiler
     })
    }
  }
}