module.exports = ({
name: "yuri",
code: `$title[Random Yuri images]
$image[attachment://yuri.png]
$attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/nsfw/yuri?key=$get[key];url;API DOWN];yuri.png]
$footer[$randomText[Powered by gud-api;Deffo not questioning your fetishes]]
$color[$getVar[color]]
$onlyNSFW[{title:❌ Access denied!}{description:Reason: \`This command can only be used in an NSFW channel\`}{color:RED}]
$let[key;$djseval[process.env.sophie_key;yes]
$botTyping`
})