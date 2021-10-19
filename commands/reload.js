module.exports = {
  name: "reload",
  aliases: ['update'],
  description: "Reloads the bot's commands",
  usage: "gud reload",
  example: "gud reload",
  code: `
  Successfully reloaded all commands. Time took: $executionTime ms.
  $updateCommands
  $onlyForIDs[$botOwnerID;]`
}