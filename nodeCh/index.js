//challange
const fs = require('fs')

//make new folder
fs.mkdirSync("gg");

//create file inside gg
fs.writeFileSync('gg/bio.txt', "This is a simple challange")

//read file without getting buffer
data = fs.readFileSync('gg/bio.txt', 'utf8')
console.log(data)

//to delete file
fs.unlinkSync("gg/bio.txt")

//to delet folder
fs.rmdirSync("gg")