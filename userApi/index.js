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

            console.log(err)

            const objData = JSON.parse(data)
            //if you get
            // TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must 
            // be of type string or an instance of Buffer or Uint8Array.
            // Received type number use to.string()
            res.end(objData[0].price.toString());
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




