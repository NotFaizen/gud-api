module.exports = ({
name: "futa",
aliases: ["futanari", "dickgirl", "shemale"],
code: `$title[Random futas!]
$image[attachment://futa.png]
$attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/nsfw/futa?key=$get[key];url;API DOWN];futa.png]
$footer[Powered by gud-api]
$color[$getVar[color]]
$onlyNSFW[{title:❌ Access denied!}{description:Reason: \`This command can only be used in an NSFW channel\`}{color:RED}]
$let[key;$djseval[process.env.faizen_key;yes]
$botTyping`
})