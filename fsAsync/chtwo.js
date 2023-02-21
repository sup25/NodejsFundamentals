//async file commands

const fs = require('fs')
//make a new folder
fs.mkdir("chlg", (err) => {
    console.log('folder created')
    console.log(err)
})

//add file inside that folder
fs.writeFile("chlg/open.txt", "another file created", (err) => {
    console.log("file created")
    console.log(err)
})

//add sth inside the open.txt 
fs.appendFile("chlg/open.txt", ", another information added ", (err) => {
    console.log(err)
    console.log("done")
})

//read the file
fs.readFile("chlg/open.txt", "utf-8", (err, data) => {
    console.log(data)
    console.log("done")
})

//rename the fie
fs.rename("chlg/open.txt", "close.txt", (err) => {
    console.log("done")
})

//delete the file
fs.unlink("chlg/close.txt", (err) => {
    console.log("file deleted")
    console.log(err)
})

//delete the folder
fs.rmdir("chlg", (err) => {
    console.log(err)
    console.log("file deleted")
})





