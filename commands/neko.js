module.exports = ({
  name: "neko",
  code: `$title[Random Nekos!]
  $attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/neko;url;API DOWN OWO];neko.png]
  $image[attachment://neko.png]
  $footer[Powered by gud-api]
  $color[$getVar[color]]
  $botTyping`
})