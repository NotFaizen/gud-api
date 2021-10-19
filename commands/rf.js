module.exports = ({
name: "rf",
aliases: ['readfile'],
description: "Returns the contents of a file",
usage: "gud rf ./path/to/file",
example: "gud rf commands/rf.js",
code: `\`\`\`js
$readFile[$message]
\`\`\`
$onlyForIDs[$botOwnerID;]
$suppressErrors[Invalid file path]`
})