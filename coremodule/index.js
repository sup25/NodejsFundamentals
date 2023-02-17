//using core modules
const fs = require("fs");
//creating a new file
fs.writeFileSync("readme.txt", "hello this is readme file")
//if you want to update your information rewrite the whole code of no 4
//in that case all the information will be deleted and the new file is created with your new code 
//if you don't want to delete previous information and add in that existing information 
//use the code below
fs.appendFileSync("readme.txt", ", this is an updated information without earising previous data ")
//to read the data 
fs.readFileSync("readme.txt")
data = fs.readFileSync("readme.txt")

//following output will be shown
//<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20
// 72 65 61 64 6d 65 20 66 69 6c 65 2c 20 74 68 69 73 20 69 73 
//20 61 6e 20 75 70 64 61 74 65 64 20 69 6e 66 6f ... 39 more bytes>

//to get the data in text format
finaldata = data.toString();
console.log(finaldata);
//hello this is readme file, this is an updated information without earising previous data 

//since we can read and write in the readme.txt file lets rename it as readwirte.txt
fs.renameSync("readme.txt", "readwrite.txt");
