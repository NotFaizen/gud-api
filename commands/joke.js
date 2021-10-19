module.exports = ({
name: "joke",
code: `$jsonRequest[https://gud-api.gofaizen.repl.co/fun/joke/$message[1];joke;API down]
$onlyIf[$checkContains[$message[1];mom;dad;yomama]==true;{title:Invalid syntax}{description: :x: Too few arguments \n\nUsage: \`gud joke < mom | dad | yomama >\`}{color:RED}]
$botTyping`
})