module.exports = {
name: "reboot",
aliases: ['restart'],
description: "Restarts the API and bot project",
usage: "gud reboot",
example: "gud reboot",
code: `
Rebooted the bot and API. Time taken: \`$executionTime ms\`
$addCmdReactions[✅]
$reboot
$onlyForIDs[$botOwnerID;]`
}