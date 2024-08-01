/*
   * Base Bug wangsaff
   * Created By Fizzxy Production 
*/
const fs = require("fs") 

global.owner = [
  "6285172200670", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]

global.nameBot = "Fizzxy v1"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})