module.exports = ({
name: "lewdneko",
code: `$title[Lewd Cat Girls!]
$image[attachment://lewdneko.png]
$attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/nsfw/lewdneko?key=$get[key];url;API DOWN];lewdneko.png]
$footer[Powered by gud-api]
$color[$getVar[color]]
$onlyNSFW[{title:❌ Access denied!}{description:Reason: \`This command can only be used in an NSFW channel\`}{color:RED}]
$let[key;$djseval[process.env.faizen_key;yes]
$botTyping`
})