module.exports = ({
  name: "eval",
  description: "Evals a code",
  usage: "gud eval <code>",
  example: "gud eval hello world",
  code: `$eval[$message]
  $argsCheck[>1;]
  $onlyForIDs[$botOwnerID;]`
})