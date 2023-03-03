//convert to json
const fs = require('fs')
const color = {
    name: "red",
    prop: "sexiest color",
    use: "love material"
};

//use json.stringify to convert object to json
const jsonData = JSON.stringify(color);
console.log(jsonData)

//use json.parse to convert json to object
const objData = JSON.parse(jsonData);
console.log(objData)


//make new json file, access data, convert it to object
const jsonData1 = JSON.stringify(color);
fs.writeFile("json.json", jsonData1, (err) => {
    console.log('done')
})

fs.readFile("json.json", 'utf-8', (err, data) => {
    //convert to object
    const jdata = JSON.parse(data)
    console.log(jdata)
})