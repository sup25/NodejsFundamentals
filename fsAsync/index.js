const fs = require('fs');
//use callback function other wise you will get error
fs.writeFile('read.txt', 'another file creation', (err) => {
    console.log("file is created")
})

//add data in the file
fs.appendFile('read.txt', ', adding some information', (err) => {
    console.log('data added')
})

//read file
fs.readFile('read.txt', "utf-8", (err, data) => {
    console.log(data)
})