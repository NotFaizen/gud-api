module.exports = ({
name: "animequote",
code: `$title[Random anime quotes]
$addField[Quote:;"$getObjectProperty[quote]"]
$addField[Character:;$getObjectProperty[character]]
$addField[Anime:;$getObjectProperty[anime]]
$color[$getVar[color]] $createObject[$jsonRequest[https://gud-api.gofaizen.repl.co/fun/animequote]]
$botTyping
`
})