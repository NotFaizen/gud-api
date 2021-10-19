module.exports = ({
name: "reqs",
code: `$title[$toLocaleUppercase[$message[1]] request count]
$description[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/reqs/$message[1]?key=$djseval[process.env.faizen_key;yes];reqs;Either the API is down, or you provided an invalid endpoint $customEmoji[wtf]] requests so far]
$color[$getVar[color]]
$footer[DB set on Friday, 15th October 2021;$userAvatar[$clientID]]
$argsCheck[>1;Sir, I'm gonna need an endpoint or category to get the request count for (you can also use \`total\` for the total request count)]`
})