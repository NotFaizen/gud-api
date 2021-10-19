module.exports = ({
name: "succubus",
code: `$title[Random Succubi]
$image[attachment://succubus.png]
$attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/nsfw/succubus?key=$get[key];url;API DOWN];succubus.png]
$footer[$randomText[Powered by gud-api;Deffo not questioning your fetishes]]
$color[$getVar[color]]
$onlyNSFW[{title:❌ Access denied!}{description:Reason: \`This command can only be used in an NSFW channel\`}{color:RED}]
$let[key;$djseval[process.env.faizen_key;yes]
$botTyping`
})