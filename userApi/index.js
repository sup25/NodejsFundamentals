const fs = require('fs')

//import http module
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('hello')
    } else if (req.url == "/about") {

        res.end("this is about page")
    } else if (req.url == "/api") {
        fs.readFile(`${__dirname}/userApi.json`, 'utf-8', (err, data) => {
            res.writeHead(200, { "Content-type": "application/json" });
            console.log(data)

            const objData = JSON.parse(data);



            res.end(objData[{}]);



            // console.log(objData && objData.status ? objData.status : null);
            // res.end(objData && objData.status ? JSON.stringify(objData.status) : null);
            // res.writeHead(200, {"Content-type" : "application/json"});
            // res.write(JSON.stringify(objData))
            // res.end();

        })


    }
    else {
        res.writeHead(404, { 'Content-type': "text/html" });
        res.end("<h1>404 page doesnot exist</h1>")
    }

})

//listen the request
server.listen(2000, "127.0.0.1", () => {
    console.log('listening to port 2000')
})


// fs.readFile = ('userApi.json', 'utf-8', (err, data) => {
//     const jdata = JSON.parse(data)
//     console.log(data)
// })

