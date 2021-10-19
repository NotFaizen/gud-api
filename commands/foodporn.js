module.exports = ({
name: "foodporn",
code: `$title[$getObjectProperty[title];$getObjectProperty[image]]
$image[$getObjectProperty[image]]
$footer[👍 $getObjectProperty[upvotes] | 💬 $getObjectProperty[comments]]
$color[$getVar[color]] $createObject[$jsonRequest[https://gud-api.gofaizen.repl.co/fun/foodporn]]
$suppressErrors[An error occurred while fetching your things]`
})